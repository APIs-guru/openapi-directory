import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Flag } from "./flag";


// FlagsListResponse
/** 
 * Flags list response.
**/
export class FlagsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Flag })
  items?: Flag[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
