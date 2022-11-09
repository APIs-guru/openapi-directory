import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextInput
/** 
 * Identifies which input file and track should be used.
**/
export class TextInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=track" })
  track?: number;
}
