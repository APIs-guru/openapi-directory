import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Campaign } from "./campaign";


// CampaignsListResponse
/** 
 * Campaign List Response
**/
export class CampaignsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaigns", elemType: shared.Campaign })
  campaigns?: Campaign[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
