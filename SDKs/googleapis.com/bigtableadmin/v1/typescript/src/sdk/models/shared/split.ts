import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Split
/** 
 * An initial split point for a newly created table.
**/
export class Split extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
