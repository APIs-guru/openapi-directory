import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";



// LocalizedStringBundle
/** 
 * A localized string bundle resource.
**/
export class LocalizedStringBundle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: LocalizedString })
  translations?: LocalizedString[];
}
