import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextInput
/** 
 * Identifies which input file and track should be used.
**/
export class TextInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: number;
}
