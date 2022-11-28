import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";



// AdsListResponse
/** 
 * Ad List Response
**/
export class AdsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ads", elemType: Ad })
  ads?: Ad[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
