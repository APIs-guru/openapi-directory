import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Browser } from "./browser";


// BrowsersListResponse
/** 
 * Browser List Response
**/
export class BrowsersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=browsers", elemType: shared.Browser })
  browsers?: Browser[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
