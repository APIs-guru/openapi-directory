import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Advertiser } from "./advertiser";



// AdvertisersListResponse
/** 
 * Advertiser List Response
**/
export class AdvertisersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisers", elemType: Advertiser })
  advertisers?: Advertiser[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
