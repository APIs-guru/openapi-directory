import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ImportErrorsConfig } from "./googlecloudretailv2importerrorsconfig";
import { GoogleCloudRetailV2UserEventInputConfigInput } from "./googlecloudretailv2usereventinputconfig";



// GoogleCloudRetailV2ImportUserEventsRequestInput
/** 
 * Request message for the ImportUserEvents request.
**/
export class GoogleCloudRetailV2ImportUserEventsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorsConfig" })
  errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudRetailV2UserEventInputConfigInput;
}
