import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LocalizedString } from "./localizedstring";


// LocalizedStringBundle
/** 
 * A localized string bundle resource.
**/
export class LocalizedStringBundle extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=translations", elemType: shared.LocalizedString })
  translations?: LocalizedString[];
}
