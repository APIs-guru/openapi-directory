import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1DataItem } from "./googleclouddatalabelingv1beta1dataitem";



// GoogleCloudDatalabelingV1beta1ListDataItemsResponse
/** 
 * Results of listing data items in a dataset.
**/
export class GoogleCloudDatalabelingV1beta1ListDataItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataItems", elemType: GoogleCloudDatalabelingV1beta1DataItem })
  dataItems?: GoogleCloudDatalabelingV1beta1DataItem[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
