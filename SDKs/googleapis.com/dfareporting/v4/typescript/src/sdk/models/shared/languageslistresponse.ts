import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Language } from "./language";


// LanguagesListResponse
/** 
 * Language List Response
**/
export class LanguagesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languages", elemType: shared.Language })
  languages?: Language[];
}
