import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlossaryTermsPair } from "./glossarytermspair";
import { GlossaryTermsSet } from "./glossarytermsset";


// GlossaryEntry
/** 
 * Represents a single entry in a glossary.
**/
export class GlossaryEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=termsPair" })
  termsPair?: GlossaryTermsPair;

  @Metadata({ data: "json, name=termsSet" })
  termsSet?: GlossaryTermsSet;
}
