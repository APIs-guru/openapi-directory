import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaUserEventInlineSource } from "./googlecloudretailv2betausereventinlinesource";


// GoogleCloudRetailV2betaUserEventInputConfig
/** 
 * The input config source for user events.
**/
export class GoogleCloudRetailV2betaUserEventInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2betaGcsSource;

  @Metadata({ data: "json, name=userEventInlineSource" })
  userEventInlineSource?: GoogleCloudRetailV2betaUserEventInlineSource;
}
