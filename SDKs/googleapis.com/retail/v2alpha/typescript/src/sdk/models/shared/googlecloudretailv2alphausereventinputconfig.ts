import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";
import { GoogleCloudRetailV2alphaGcsSource } from "./googlecloudretailv2alphagcssource";
import { GoogleCloudRetailV2alphaUserEventInlineSource } from "./googlecloudretailv2alphausereventinlinesource";


// GoogleCloudRetailV2alphaUserEventInputConfig
/** 
 * The input config source for user events.
**/
export class GoogleCloudRetailV2alphaUserEventInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2alphaGcsSource;

  @Metadata({ data: "json, name=userEventInlineSource" })
  userEventInlineSource?: GoogleCloudRetailV2alphaUserEventInlineSource;
}
