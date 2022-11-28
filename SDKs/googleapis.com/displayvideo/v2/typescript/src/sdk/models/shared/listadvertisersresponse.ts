import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Advertiser } from "./advertiser";



export class ListAdvertisersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertisers", elemType: Advertiser })
  advertisers?: Advertiser[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
