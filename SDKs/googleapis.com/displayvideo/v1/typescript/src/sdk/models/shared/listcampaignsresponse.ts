import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";



export class ListCampaignsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaigns", elemType: Campaign })
  campaigns?: Campaign[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
