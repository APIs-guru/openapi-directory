import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2UserEventInlineSourceInput } from "./googlecloudretailv2usereventinlinesource";
/**
 * The input config source for user events.
**/
export declare class GoogleCloudRetailV2UserEventInputConfigInput extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
    gcsSource?: GoogleCloudRetailV2GcsSource;
    userEventInlineSource?: GoogleCloudRetailV2UserEventInlineSourceInput;
}
