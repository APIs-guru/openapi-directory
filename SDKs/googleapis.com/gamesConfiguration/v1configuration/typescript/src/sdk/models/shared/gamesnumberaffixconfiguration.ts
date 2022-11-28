import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";



// GamesNumberAffixConfiguration
/** 
 * A number affix resource.
**/
export class GamesNumberAffixConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=few" })
  few?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=many" })
  many?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=one" })
  one?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=other" })
  other?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=two" })
  two?: LocalizedStringBundle;

  @SpeakeasyMetadata({ data: "json, name=zero" })
  zero?: LocalizedStringBundle;
}
