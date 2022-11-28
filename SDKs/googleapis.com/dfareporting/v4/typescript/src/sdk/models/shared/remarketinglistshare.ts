import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemarketingListShare
/** 
 * Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
**/
export class RemarketingListShare extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=remarketingListId" })
  remarketingListId?: string;

  @SpeakeasyMetadata({ data: "json, name=sharedAccountIds" })
  sharedAccountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=sharedAdvertiserIds" })
  sharedAdvertiserIds?: string[];
}
