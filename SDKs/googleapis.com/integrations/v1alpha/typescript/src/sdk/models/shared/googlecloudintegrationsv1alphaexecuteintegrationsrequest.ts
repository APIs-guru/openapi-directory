import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmFrontendsEventbusProtoEventParameters } from "./enterprisecrmfrontendseventbusprotoeventparameters";


// GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest
/** 
 * The request for executing an integration.
**/
export class GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=doNotPropagateError" })
  doNotPropagateError?: boolean;

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=inputParameters", elemType: shared.GoogleCloudIntegrationsV1alphaValueType })
  inputParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @Metadata({ data: "json, name=parameterEntries", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @Metadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
