import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1Analysis } from "./googlecloudcontactcenterinsightsv1analysis";


// GoogleCloudContactcenterinsightsV1ListAnalysesResponse
/** 
 * The response to list analyses.
**/
export class GoogleCloudContactcenterinsightsV1ListAnalysesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyses", elemType: shared.GoogleCloudContactcenterinsightsV1Analysis })
  analyses?: GoogleCloudContactcenterinsightsV1Analysis[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
