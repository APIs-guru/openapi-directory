import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
/**
 * The request for executing an integration.
**/
export declare class GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest extends SpeakeasyBase {
    doNotPropagateError?: boolean;
    executionId?: string;
    inputParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
    parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    requestId?: string;
    triggerId?: string;
}
