import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlossaryInputConfig } from "./glossaryinputconfig";
import { LanguageCodesSet } from "./languagecodesset";
import { LanguageCodePair } from "./languagecodepair";


// Glossary
/** 
 * Represents a glossary built from user provided data.
**/
export class Glossary extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=entryCount" })
  entryCount?: number;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GlossaryInputConfig;

  @Metadata({ data: "json, name=languageCodesSet" })
  languageCodesSet?: LanguageCodesSet;

  @Metadata({ data: "json, name=languagePair" })
  languagePair?: LanguageCodePair;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=submitTime" })
  submitTime?: string;
}
