import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaControl } from "./googlecloudretailv2alphacontrol";
/**
 * Response for ListControls method.
**/
export declare class GoogleCloudRetailV2alphaListControlsResponse extends SpeakeasyBase {
    controls?: GoogleCloudRetailV2alphaControl[];
    nextPageToken?: string;
}
