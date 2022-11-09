import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";


// GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest
/** 
 * The request for scheduling an integration.
**/
export class GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputParameters", elemType: shared.GoogleCloudIntegrationsV1alphaValueType })
  inputParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @Metadata({ data: "json, name=parameterEntries", elemType: shared.EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @Metadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
