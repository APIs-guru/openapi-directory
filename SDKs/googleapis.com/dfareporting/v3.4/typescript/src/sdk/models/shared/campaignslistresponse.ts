import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";



// CampaignsListResponse
/** 
 * Campaign List Response
**/
export class CampaignsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaigns", elemType: Campaign })
  campaigns?: Campaign[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
