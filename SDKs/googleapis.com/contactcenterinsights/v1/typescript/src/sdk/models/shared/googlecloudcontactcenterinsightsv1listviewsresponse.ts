import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1View } from "./googlecloudcontactcenterinsightsv1view";


// GoogleCloudContactcenterinsightsV1ListViewsResponse
/** 
 * The response of listing views.
**/
export class GoogleCloudContactcenterinsightsV1ListViewsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=views", elemType: shared.GoogleCloudContactcenterinsightsV1View })
  views?: GoogleCloudContactcenterinsightsV1View[];
}
