import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AnalyzeEntitiesRequestLicensedVocabulariesEnum {
    LicensedVocabularyUnspecified = "LICENSED_VOCABULARY_UNSPECIFIED",
    Icd10Cm = "ICD10CM",
    SnomedctUs = "SNOMEDCT_US"
}


// AnalyzeEntitiesRequest
/** 
 * The request to analyze healthcare entities in a document.
**/
export class AnalyzeEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentContent" })
  documentContent?: string;

  @SpeakeasyMetadata({ data: "json, name=licensedVocabularies" })
  licensedVocabularies?: AnalyzeEntitiesRequestLicensedVocabulariesEnum[];
}
