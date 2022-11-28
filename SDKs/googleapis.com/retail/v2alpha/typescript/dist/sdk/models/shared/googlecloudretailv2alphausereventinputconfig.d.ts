import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";
import { GoogleCloudRetailV2alphaGcsSource } from "./googlecloudretailv2alphagcssource";
import { GoogleCloudRetailV2alphaUserEventInlineSourceInput } from "./googlecloudretailv2alphausereventinlinesource";
/**
 * The input config source for user events.
**/
export declare class GoogleCloudRetailV2alphaUserEventInputConfigInput extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;
    gcsSource?: GoogleCloudRetailV2alphaGcsSource;
    userEventInlineSource?: GoogleCloudRetailV2alphaUserEventInlineSourceInput;
}
