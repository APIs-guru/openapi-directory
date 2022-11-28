import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaImportErrorsConfig } from "./googlecloudretailv2alphaimporterrorsconfig";
import { GoogleCloudRetailV2alphaUserEventInputConfigInput } from "./googlecloudretailv2alphausereventinputconfig";



// GoogleCloudRetailV2alphaImportUserEventsRequestInput
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRetailV2alphaImportUserEventsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2alphaUserEventInputConfigInput;
}
