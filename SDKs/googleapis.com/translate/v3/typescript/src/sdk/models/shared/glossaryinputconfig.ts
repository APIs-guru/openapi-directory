import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsSource } from "./gcssource";


// GlossaryInputConfig
/** 
 * Input configuration for glossaries.
**/
export class GlossaryInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
