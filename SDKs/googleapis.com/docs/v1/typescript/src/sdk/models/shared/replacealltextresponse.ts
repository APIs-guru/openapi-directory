import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplaceAllTextResponse
/** 
 * The result of replacing text.
**/
export class ReplaceAllTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=occurrencesChanged" })
  occurrencesChanged?: number;
}
