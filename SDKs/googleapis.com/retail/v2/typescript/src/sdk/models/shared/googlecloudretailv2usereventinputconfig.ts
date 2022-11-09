import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2UserEventInlineSource } from "./googlecloudretailv2usereventinlinesource";


// GoogleCloudRetailV2UserEventInputConfig
/** 
 * The input config source for user events.
**/
export class GoogleCloudRetailV2UserEventInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2BigQuerySource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2GcsSource;

  @Metadata({ data: "json, name=userEventInlineSource" })
  userEventInlineSource?: GoogleCloudRetailV2UserEventInlineSource;
}
