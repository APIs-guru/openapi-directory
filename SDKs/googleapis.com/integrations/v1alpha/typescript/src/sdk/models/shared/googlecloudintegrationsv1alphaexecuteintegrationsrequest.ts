import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";



// GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest
/** 
 * The request for executing an integration.
**/
export class GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doNotPropagateError" })
  doNotPropagateError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=inputParameters", elemType: GoogleCloudIntegrationsV1alphaValueType })
  inputParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @SpeakeasyMetadata({ data: "json, name=parameterEntries", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
