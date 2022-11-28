import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Browser } from "./browser";



// BrowsersListResponse
/** 
 * Browser List Response
**/
export class BrowsersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browsers", elemType: Browser })
  browsers?: Browser[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
