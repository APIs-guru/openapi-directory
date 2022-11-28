import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1DialogflowSourceInput } from "./googlecloudcontactcenterinsightsv1dialogflowsource";
import { GoogleCloudContactcenterinsightsV1GcsSource } from "./googlecloudcontactcenterinsightsv1gcssource";
import { GoogleCloudContactcenterinsightsV1DialogflowSource } from "./googlecloudcontactcenterinsightsv1dialogflowsource";



// GoogleCloudContactcenterinsightsV1ConversationDataSourceInput
/** 
 * The conversation source, which is a combination of transcript and audio.
**/
export class GoogleCloudContactcenterinsightsV1ConversationDataSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dialogflowSource" })
  dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSourceInput;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}


// GoogleCloudContactcenterinsightsV1ConversationDataSource
/** 
 * The conversation source, which is a combination of transcript and audio.
**/
export class GoogleCloudContactcenterinsightsV1ConversationDataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dialogflowSource" })
  dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSource;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}
