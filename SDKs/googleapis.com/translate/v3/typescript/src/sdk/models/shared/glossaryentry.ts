import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTermsPair } from "./glossarytermspair";
import { GlossaryTermsSet } from "./glossarytermsset";



// GlossaryEntry
/** 
 * Represents a single entry in a glossary.
**/
export class GlossaryEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=termsPair" })
  termsPair?: GlossaryTermsPair;

  @SpeakeasyMetadata({ data: "json, name=termsSet" })
  termsSet?: GlossaryTermsSet;
}
