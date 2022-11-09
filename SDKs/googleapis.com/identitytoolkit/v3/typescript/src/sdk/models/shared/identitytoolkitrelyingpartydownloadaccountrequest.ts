import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentitytoolkitRelyingpartyDownloadAccountRequest
/** 
 * Request to download user account in batch.
**/
export class IdentitytoolkitRelyingpartyDownloadAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delegatedProjectNumber" })
  delegatedProjectNumber?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targetProjectId" })
  targetProjectId?: string;
}
