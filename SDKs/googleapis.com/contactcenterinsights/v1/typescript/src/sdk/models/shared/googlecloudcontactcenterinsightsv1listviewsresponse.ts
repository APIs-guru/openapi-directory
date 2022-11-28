import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1View } from "./googlecloudcontactcenterinsightsv1view";



// GoogleCloudContactcenterinsightsV1ListViewsResponse
/** 
 * The response of listing views.
**/
export class GoogleCloudContactcenterinsightsV1ListViewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=views", elemType: GoogleCloudContactcenterinsightsV1View })
  views?: GoogleCloudContactcenterinsightsV1View[];
}
