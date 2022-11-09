import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AnalyzeEntitiesRequestLicensedVocabulariesEnum {
    LicensedVocabularyUnspecified = "LICENSED_VOCABULARY_UNSPECIFIED"
,    Icd10Cm = "ICD10CM"
,    SnomedctUs = "SNOMEDCT_US"
}


// AnalyzeEntitiesRequest
/** 
 * The request to analyze healthcare entities in a document.
**/
export class AnalyzeEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentContent" })
  documentContent?: string;

  @Metadata({ data: "json, name=licensedVocabularies" })
  licensedVocabularies?: AnalyzeEntitiesRequestLicensedVocabulariesEnum[];
}
