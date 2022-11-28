import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";
/**
 * The request for scheduling an integration.
**/
export declare class GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest extends SpeakeasyBase {
    inputParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    parameters?: EnterpriseCrmEventbusProtoEventParameters;
    requestId?: string;
    scheduleTime?: string;
    triggerId?: string;
}
