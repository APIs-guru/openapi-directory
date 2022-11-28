import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlossaryInputConfig } from "./glossaryinputconfig";
import { LanguageCodesSet } from "./languagecodesset";
import { LanguageCodePair } from "./languagecodepair";



// GlossaryInput
/** 
 * Represents a glossary built from user provided data.
**/
export class GlossaryInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GlossaryInputConfig;

  @SpeakeasyMetadata({ data: "json, name=languageCodesSet" })
  languageCodesSet?: LanguageCodesSet;

  @SpeakeasyMetadata({ data: "json, name=languagePair" })
  languagePair?: LanguageCodePair;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Glossary
/** 
 * Represents a glossary built from user provided data.
**/
export class Glossary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=entryCount" })
  entryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GlossaryInputConfig;

  @SpeakeasyMetadata({ data: "json, name=languageCodesSet" })
  languageCodesSet?: LanguageCodesSet;

  @SpeakeasyMetadata({ data: "json, name=languagePair" })
  languagePair?: LanguageCodePair;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=submitTime" })
  submitTime?: string;
}
