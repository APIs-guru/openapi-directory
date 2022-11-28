import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryInputConfig } from "./glossaryinputconfig";
import { LanguageCodesSet } from "./languagecodesset";
import { LanguageCodePair } from "./languagecodepair";
/**
 * Represents a glossary built from user provided data.
**/
export declare class Glossary extends SpeakeasyBase {
    endTime?: string;
    entryCount?: number;
    inputConfig?: GlossaryInputConfig;
    languageCodesSet?: LanguageCodesSet;
    languagePair?: LanguageCodePair;
    name?: string;
    submitTime?: string;
}
/**
 * Represents a glossary built from user provided data.
**/
export declare class GlossaryInput extends SpeakeasyBase {
    inputConfig?: GlossaryInputConfig;
    languageCodesSet?: LanguageCodesSet;
    languagePair?: LanguageCodePair;
    name?: string;
}
