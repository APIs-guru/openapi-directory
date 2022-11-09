import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ad } from "./ad";


// AdsListResponse
/** 
 * Ad List Response
**/
export class AdsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ads", elemType: shared.Ad })
  ads?: Ad[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
