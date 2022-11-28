import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";



// LanguagesListResponse
/** 
 * Language List Response
**/
export class LanguagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languages", elemType: Language })
  languages?: Language[];
}
