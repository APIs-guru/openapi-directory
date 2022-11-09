import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { LocalizedStringBundle } from "./localizedstringbundle";
import { LocalizedStringBundle } from "./localizedstringbundle";


// GamesNumberAffixConfiguration
/** 
 * A number affix resource.
**/
export class GamesNumberAffixConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=few" })
  few?: LocalizedStringBundle;

  @Metadata({ data: "json, name=many" })
  many?: LocalizedStringBundle;

  @Metadata({ data: "json, name=one" })
  one?: LocalizedStringBundle;

  @Metadata({ data: "json, name=other" })
  other?: LocalizedStringBundle;

  @Metadata({ data: "json, name=two" })
  two?: LocalizedStringBundle;

  @Metadata({ data: "json, name=zero" })
  zero?: LocalizedStringBundle;
}
