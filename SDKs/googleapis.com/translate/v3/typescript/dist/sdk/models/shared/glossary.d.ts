import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryInputConfig } from "./glossaryinputconfig";
import { LanguageCodesSet } from "./languagecodesset";
import { LanguageCodePair } from "./languagecodepair";
/**
 * Represents a glossary built from user provided data.
**/
export declare class GlossaryInput extends SpeakeasyBase {
    displayName?: string;
    inputConfig?: GlossaryInputConfig;
    languageCodesSet?: LanguageCodesSet;
    languagePair?: LanguageCodePair;
    name?: string;
}
/**
 * Represents a glossary built from user provided data.
**/
export declare class Glossary extends SpeakeasyBase {
    displayName?: string;
    endTime?: string;
    entryCount?: number;
    inputConfig?: GlossaryInputConfig;
    languageCodesSet?: LanguageCodesSet;
    languagePair?: LanguageCodePair;
    name?: string;
    submitTime?: string;
}
