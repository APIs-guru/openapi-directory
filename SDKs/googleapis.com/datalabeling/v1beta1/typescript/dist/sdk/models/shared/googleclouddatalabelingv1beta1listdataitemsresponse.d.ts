import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1DataItem } from "./googleclouddatalabelingv1beta1dataitem";
/**
 * Results of listing data items in a dataset.
**/
export declare class GoogleCloudDatalabelingV1beta1ListDataItemsResponse extends SpeakeasyBase {
    dataItems?: GoogleCloudDatalabelingV1beta1DataItem[];
    nextPageToken?: string;
}
