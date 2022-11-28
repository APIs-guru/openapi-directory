import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Control } from "./googlecloudretailv2control";
/**
 * Response for ListControls method.
**/
export declare class GoogleCloudRetailV2ListControlsResponse extends SpeakeasyBase {
    controls?: GoogleCloudRetailV2Control[];
    nextPageToken?: string;
}
