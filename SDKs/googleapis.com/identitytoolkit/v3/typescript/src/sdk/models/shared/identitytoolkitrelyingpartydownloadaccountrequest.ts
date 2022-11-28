import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentitytoolkitRelyingpartyDownloadAccountRequest
/** 
 * Request to download user account in batch.
**/
export class IdentitytoolkitRelyingpartyDownloadAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProjectId" })
  targetProjectId?: string;
}
