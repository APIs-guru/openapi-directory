import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaControl } from "./googlecloudretailv2betacontrol";
/**
 * Response for ListControls method.
**/
export declare class GoogleCloudRetailV2betaListControlsResponse extends SpeakeasyBase {
    controls?: GoogleCloudRetailV2betaControl[];
    nextPageToken?: string;
}
