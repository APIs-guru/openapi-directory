import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemarketingListShare
/** 
 * Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
**/
export class RemarketingListShare extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=remarketingListId" })
  remarketingListId?: string;

  @Metadata({ data: "json, name=sharedAccountIds" })
  sharedAccountIds?: string[];

  @Metadata({ data: "json, name=sharedAdvertiserIds" })
  sharedAdvertiserIds?: string[];
}
