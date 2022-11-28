import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Split
/** 
 * An initial split point for a newly created table.
**/
export class Split extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
