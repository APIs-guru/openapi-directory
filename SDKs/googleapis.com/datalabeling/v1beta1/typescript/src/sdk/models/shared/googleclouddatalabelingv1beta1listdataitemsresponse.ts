import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1DataItem } from "./googleclouddatalabelingv1beta1dataitem";


// GoogleCloudDatalabelingV1beta1ListDataItemsResponse
/** 
 * Results of listing data items in a dataset.
**/
export class GoogleCloudDatalabelingV1beta1ListDataItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataItems", elemType: shared.GoogleCloudDatalabelingV1beta1DataItem })
  dataItems?: GoogleCloudDatalabelingV1beta1DataItem[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
