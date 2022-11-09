import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Feature } from "./feature";
/**
 * Response message for the `GkeHub.ListFeatures` method.
**/
export declare class ListFeaturesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Feature[];
}
