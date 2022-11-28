import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConceptRelation } from "./conceptrelation";



export class ConceptArticleListResultsConcepts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nytd_des" })
  nytdDes?: string[];

  @SpeakeasyMetadata({ data: "json, name=nytd_org" })
  nytdOrg?: string[];

  @SpeakeasyMetadata({ data: "json, name=nytd_per" })
  nytdPer?: string[];
}


export class ConceptArticleListResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: string;

  @SpeakeasyMetadata({ data: "json, name=concepts" })
  concepts?: ConceptArticleListResultsConcepts;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=document_type" })
  documentType?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type_of_material" })
  typeOfMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ConceptArticleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: ConceptArticleListResults })
  results?: ConceptArticleListResults[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class ConceptCombinations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combination_note" })
  combinationNote?: string;

  @SpeakeasyMetadata({ data: "json, name=combination_source_concept_id" })
  combinationSourceConceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=combination_source_concept_name" })
  combinationSourceConceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=combination_source_concept_type" })
  combinationSourceConceptType?: string;

  @SpeakeasyMetadata({ data: "json, name=combination_target_concept_id" })
  combinationTargetConceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=combination_target_concept_name" })
  combinationTargetConceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=combination_target_concept_type" })
  combinationTargetConceptType?: string;
}


export class ConceptLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concept_id" })
  conceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=concept_name" })
  conceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_status" })
  conceptStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_type" })
  conceptType?: string;

  @SpeakeasyMetadata({ data: "json, name=is_times_tag" })
  isTimesTag?: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=link_id" })
  linkId?: number;

  @SpeakeasyMetadata({ data: "json, name=link_type" })
  linkType?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping_type" })
  mappingType?: string;

  @SpeakeasyMetadata({ data: "json, name=relation" })
  relation?: string;
}


export class ConceptScopeNotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scope_note" })
  scopeNote?: string;

  @SpeakeasyMetadata({ data: "json, name=scope_note_name" })
  scopeNoteName?: string;

  @SpeakeasyMetadata({ data: "json, name=scope_note_type" })
  scopeNoteType?: string;
}


export class ConceptTaxonomy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=source_concept_id" })
  sourceConceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=source_concept_name" })
  sourceConceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=source_concept_type" })
  sourceConceptType?: string;

  @SpeakeasyMetadata({ data: "json, name=source_concept_vernacular" })
  sourceConceptVernacular?: string;

  @SpeakeasyMetadata({ data: "json, name=target_concept_id" })
  targetConceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=target_concept_name" })
  targetConceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=target_concept_type" })
  targetConceptType?: string;

  @SpeakeasyMetadata({ data: "json, name=target_concept_vernacular" })
  targetConceptVernacular?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomic_relation" })
  taxonomicRelation?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomic_verification_status" })
  taxonomicVerificationStatus?: string;
}


export class Concept extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ancestors", elemType: ConceptRelation })
  ancestors?: ConceptRelation[];

  @SpeakeasyMetadata({ data: "json, name=article_list" })
  articleList?: ConceptArticleList;

  @SpeakeasyMetadata({ data: "json, name=combinations", elemType: ConceptCombinations })
  combinations?: ConceptCombinations[];

  @SpeakeasyMetadata({ data: "json, name=concept_created" })
  conceptCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_id" })
  conceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=concept_name" })
  conceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_status" })
  conceptStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_type" })
  conceptType?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_updated" })
  conceptUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=descendants", elemType: ConceptRelation })
  descendants?: ConceptRelation[];

  @SpeakeasyMetadata({ data: "json, name=is_times_tag" })
  isTimesTag?: number;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: ConceptLinks })
  links?: ConceptLinks[];

  @SpeakeasyMetadata({ data: "json, name=scope_notes", elemType: ConceptScopeNotes })
  scopeNotes?: ConceptScopeNotes[];

  @SpeakeasyMetadata({ data: "json, name=search_api_query" })
  searchApiQuery?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomy", elemType: ConceptTaxonomy })
  taxonomy?: ConceptTaxonomy[];

  @SpeakeasyMetadata({ data: "json, name=vernacular" })
  vernacular?: string;
}
