import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdvertiserGroup } from "./advertisergroup";


// AdvertiserGroupsListResponse
/** 
 * Advertiser Group List Response
**/
export class AdvertiserGroupsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserGroups", elemType: shared.AdvertiserGroup })
  advertiserGroups?: AdvertiserGroup[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
