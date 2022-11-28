import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AnalyzeEntitiesRequestLicensedVocabulariesEnum {
    LicensedVocabularyUnspecified = "LICENSED_VOCABULARY_UNSPECIFIED",
    Icd10Cm = "ICD10CM",
    SnomedctUs = "SNOMEDCT_US"
}
/**
 * The request to analyze healthcare entities in a document.
**/
export declare class AnalyzeEntitiesRequest extends SpeakeasyBase {
    documentContent?: string;
    licensedVocabularies?: AnalyzeEntitiesRequestLicensedVocabulariesEnum[];
}
