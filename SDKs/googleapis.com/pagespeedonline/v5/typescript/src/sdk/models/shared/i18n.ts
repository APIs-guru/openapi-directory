import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RendererFormattedStrings } from "./rendererformattedstrings";


// I18n
/** 
 * Message containing the i18n data for the LHR - Version 1.
**/
export class I18n extends SpeakeasyBase {
  @Metadata({ data: "json, name=rendererFormattedStrings" })
  rendererFormattedStrings?: RendererFormattedStrings;
}
