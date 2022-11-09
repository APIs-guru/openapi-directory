import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudContactcenterinsightsV1DialogflowSource } from "./googlecloudcontactcenterinsightsv1dialogflowsource";
import { GoogleCloudContactcenterinsightsV1GcsSource } from "./googlecloudcontactcenterinsightsv1gcssource";


// GoogleCloudContactcenterinsightsV1ConversationDataSource
/** 
 * The conversation source, which is a combination of transcript and audio.
**/
export class GoogleCloudContactcenterinsightsV1ConversationDataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=dialogflowSource" })
  dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}
