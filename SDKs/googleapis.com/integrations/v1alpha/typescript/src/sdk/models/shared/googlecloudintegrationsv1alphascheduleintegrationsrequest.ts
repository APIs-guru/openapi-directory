import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { EnterpriseCrmFrontendsEventbusProtoParameterEntry } from "./enterprisecrmfrontendseventbusprotoparameterentry";
import { EnterpriseCrmEventbusProtoEventParameters } from "./enterprisecrmeventbusprotoeventparameters";



// GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest
/** 
 * The request for scheduling an integration.
**/
export class GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputParameters", elemType: GoogleCloudIntegrationsV1alphaValueType })
  inputParameters?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @SpeakeasyMetadata({ data: "json, name=parameterEntries", elemType: EnterpriseCrmFrontendsEventbusProtoParameterEntry })
  parameterEntries?: EnterpriseCrmFrontendsEventbusProtoParameterEntry[];

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: EnterpriseCrmEventbusProtoEventParameters;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;
}
