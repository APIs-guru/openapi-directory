import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplaceAllTextResponse
/** 
 * The result of replacing text.
**/
export class ReplaceAllTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;
}
