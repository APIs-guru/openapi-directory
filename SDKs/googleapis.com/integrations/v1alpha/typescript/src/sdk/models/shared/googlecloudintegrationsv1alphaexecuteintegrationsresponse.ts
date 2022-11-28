import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";



// GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse
/** 
 * The response for executing an integration.
**/
export class GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventParameters" })
  eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=executionFailed" })
  executionFailed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=outputParameters" })
  outputParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parameterEntries", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];
}
