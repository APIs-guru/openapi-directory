import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Advertiser } from "./advertiser";


// AdvertisersListResponse
/** 
 * Advertiser List Response
**/
export class AdvertisersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertisers", elemType: shared.Advertiser })
  advertisers?: Advertiser[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
