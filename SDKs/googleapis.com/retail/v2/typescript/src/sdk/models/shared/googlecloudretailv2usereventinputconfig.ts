import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2UserEventInlineSourceInput } from "./googlecloudretailv2usereventinlinesource";



// GoogleCloudRetailV2UserEventInputConfigInput
/** 
 * The input config source for user events.
**/
export class GoogleCloudRetailV2UserEventInputConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2BigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2GcsSource;

  @SpeakeasyMetadata({ data: "json, name=userEventInlineSource" })
  userEventInlineSource?: GoogleCloudRetailV2UserEventInlineSourceInput;
}
