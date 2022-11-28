import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Flag } from "./flag";



// FlagsListResponse
/** 
 * Flags list response.
**/
export class FlagsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Flag })
  items?: Flag[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
