import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaImportErrorsConfig } from "./googlecloudretailv2betaimporterrorsconfig";
import { GoogleCloudRetailV2betaUserEventInputConfigInput } from "./googlecloudretailv2betausereventinputconfig";



// GoogleCloudRetailV2betaImportUserEventsRequestInput
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRetailV2betaImportUserEventsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2betaUserEventInputConfigInput;
}
