import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1View } from "./googlecloudcontactcenterinsightsv1view";
/**
 * The response of listing views.
**/
export declare class GoogleCloudContactcenterinsightsV1ListViewsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    views?: GoogleCloudContactcenterinsightsV1View[];
}
