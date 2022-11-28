import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaUserEventInlineSourceInput } from "./googlecloudretailv2betausereventinlinesource";
/**
 * The input config source for user events.
**/
export declare class GoogleCloudRetailV2betaUserEventInputConfigInput extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;
    gcsSource?: GoogleCloudRetailV2betaGcsSource;
    userEventInlineSource?: GoogleCloudRetailV2betaUserEventInlineSourceInput;
}
