import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
/**
 * The response for executing an integration.
**/
export declare class GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse extends SpeakeasyBase {
    eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;
    executionFailed?: boolean;
    executionId?: string;
    outputParameters?: Map<string, any>;
    parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
}
