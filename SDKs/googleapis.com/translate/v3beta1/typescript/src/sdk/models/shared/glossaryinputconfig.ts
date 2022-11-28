import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// GlossaryInputConfig
/** 
 * Input configuration for glossaries.
**/
export class GlossaryInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
