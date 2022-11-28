import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Revision } from "./googlecloudrunv2revision";



// GoogleCloudRunV2ListRevisionsResponse
/** 
 * Response message containing a list of Revisions.
**/
export class GoogleCloudRunV2ListRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: GoogleCloudRunV2Revision })
  revisions?: GoogleCloudRunV2Revision[];
}
