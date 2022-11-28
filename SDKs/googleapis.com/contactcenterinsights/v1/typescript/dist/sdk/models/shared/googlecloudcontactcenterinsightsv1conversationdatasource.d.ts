import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1DialogflowSourceInput } from "./googlecloudcontactcenterinsightsv1dialogflowsource";
import { GoogleCloudContactcenterinsightsV1GcsSource } from "./googlecloudcontactcenterinsightsv1gcssource";
import { GoogleCloudContactcenterinsightsV1DialogflowSource } from "./googlecloudcontactcenterinsightsv1dialogflowsource";
/**
 * The conversation source, which is a combination of transcript and audio.
**/
export declare class GoogleCloudContactcenterinsightsV1ConversationDataSourceInput extends SpeakeasyBase {
    dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSourceInput;
    gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}
/**
 * The conversation source, which is a combination of transcript and audio.
**/
export declare class GoogleCloudContactcenterinsightsV1ConversationDataSource extends SpeakeasyBase {
    dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSource;
    gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}
