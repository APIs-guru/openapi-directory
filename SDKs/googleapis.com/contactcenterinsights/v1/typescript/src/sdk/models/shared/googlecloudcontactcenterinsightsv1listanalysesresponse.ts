import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";



// GoogleCloudContactcenterinsightsV1ListAnalysesResponse
/** 
 * The response to list analyses.
**/
export class GoogleCloudContactcenterinsightsV1ListAnalysesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyses", elemType: GoogleCloudContactcenterinsightsV1Analysis })
  analyses?: GoogleCloudContactcenterinsightsV1Analysis[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
