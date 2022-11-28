import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaUserEventInlineSourceInput } from "./googlecloudretailv2betausereventinlinesource";



// GoogleCloudRetailV2betaUserEventInputConfigInput
/** 
 * The input config source for user events.
**/
export class GoogleCloudRetailV2betaUserEventInputConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2betaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=userEventInlineSource" })
  userEventInlineSource?: GoogleCloudRetailV2betaUserEventInlineSourceInput;
}
