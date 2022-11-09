import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";


// GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse
/** 
 * The response for executing an integration.
**/
export class GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventParameters" })
  eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=executionFailed" })
  executionFailed?: boolean;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=outputParameters" })
  outputParameters?: Map<string, any>;

  @Metadata({ data: "json, name=parameterEntries", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
}
