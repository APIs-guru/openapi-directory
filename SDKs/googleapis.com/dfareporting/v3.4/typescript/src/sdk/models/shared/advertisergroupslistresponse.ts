import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdvertiserGroup } from "./advertisergroup";



// AdvertiserGroupsListResponse
/** 
 * Advertiser Group List Response
**/
export class AdvertiserGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserGroups", elemType: AdvertiserGroup })
  advertiserGroups?: AdvertiserGroup[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
