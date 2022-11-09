import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConceptRelation } from "./conceptrelation";
import { ConceptRelation } from "./conceptrelation";


export class ConceptArticleListResultsConcepts extends SpeakeasyBase {
  @Metadata({ data: "json, name=nytd_des" })
  nytdDes?: string[];

  @Metadata({ data: "json, name=nytd_org" })
  nytdOrg?: string[];

  @Metadata({ data: "json, name=nytd_per" })
  nytdPer?: string[];
}


export class ConceptArticleListResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=byline" })
  byline?: string;

  @Metadata({ data: "json, name=concepts" })
  concepts?: ConceptArticleListResultsConcepts;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=document_type" })
  documentType?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type_of_material" })
  typeOfMaterial?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ConceptArticleList extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.ConceptArticleListResults })
  results?: ConceptArticleListResults[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class ConceptCombinations extends SpeakeasyBase {
  @Metadata({ data: "json, name=combination_note" })
  combinationNote?: string;

  @Metadata({ data: "json, name=combination_source_concept_id" })
  combinationSourceConceptId?: number;

  @Metadata({ data: "json, name=combination_source_concept_name" })
  combinationSourceConceptName?: string;

  @Metadata({ data: "json, name=combination_source_concept_type" })
  combinationSourceConceptType?: string;

  @Metadata({ data: "json, name=combination_target_concept_id" })
  combinationTargetConceptId?: number;

  @Metadata({ data: "json, name=combination_target_concept_name" })
  combinationTargetConceptName?: string;

  @Metadata({ data: "json, name=combination_target_concept_type" })
  combinationTargetConceptType?: string;
}


export class ConceptLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=concept_id" })
  conceptId?: number;

  @Metadata({ data: "json, name=concept_name" })
  conceptName?: string;

  @Metadata({ data: "json, name=concept_status" })
  conceptStatus?: string;

  @Metadata({ data: "json, name=concept_type" })
  conceptType?: string;

  @Metadata({ data: "json, name=is_times_tag" })
  isTimesTag?: number;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=link_id" })
  linkId?: number;

  @Metadata({ data: "json, name=link_type" })
  linkType?: string;

  @Metadata({ data: "json, name=mapping_type" })
  mappingType?: string;

  @Metadata({ data: "json, name=relation" })
  relation?: string;
}


export class ConceptScopeNotes extends SpeakeasyBase {
  @Metadata({ data: "json, name=scope_note" })
  scopeNote?: string;

  @Metadata({ data: "json, name=scope_note_name" })
  scopeNoteName?: string;

  @Metadata({ data: "json, name=scope_note_type" })
  scopeNoteType?: string;
}


export class ConceptTaxonomy extends SpeakeasyBase {
  @Metadata({ data: "json, name=source_concept_id" })
  sourceConceptId?: number;

  @Metadata({ data: "json, name=source_concept_name" })
  sourceConceptName?: string;

  @Metadata({ data: "json, name=source_concept_type" })
  sourceConceptType?: string;

  @Metadata({ data: "json, name=source_concept_vernacular" })
  sourceConceptVernacular?: string;

  @Metadata({ data: "json, name=target_concept_id" })
  targetConceptId?: number;

  @Metadata({ data: "json, name=target_concept_name" })
  targetConceptName?: string;

  @Metadata({ data: "json, name=target_concept_type" })
  targetConceptType?: string;

  @Metadata({ data: "json, name=target_concept_vernacular" })
  targetConceptVernacular?: string;

  @Metadata({ data: "json, name=taxonomic_relation" })
  taxonomicRelation?: string;

  @Metadata({ data: "json, name=taxonomic_verification_status" })
  taxonomicVerificationStatus?: string;
}


export class Concept extends SpeakeasyBase {
  @Metadata({ data: "json, name=ancestors", elemType: shared.ConceptRelation })
  ancestors?: ConceptRelation[];

  @Metadata({ data: "json, name=article_list" })
  articleList?: ConceptArticleList;

  @Metadata({ data: "json, name=combinations", elemType: shared.ConceptCombinations })
  combinations?: ConceptCombinations[];

  @Metadata({ data: "json, name=concept_created" })
  conceptCreated?: string;

  @Metadata({ data: "json, name=concept_id" })
  conceptId?: number;

  @Metadata({ data: "json, name=concept_name" })
  conceptName?: string;

  @Metadata({ data: "json, name=concept_status" })
  conceptStatus?: string;

  @Metadata({ data: "json, name=concept_type" })
  conceptType?: string;

  @Metadata({ data: "json, name=concept_updated" })
  conceptUpdated?: string;

  @Metadata({ data: "json, name=descendants", elemType: shared.ConceptRelation })
  descendants?: ConceptRelation[];

  @Metadata({ data: "json, name=is_times_tag" })
  isTimesTag?: number;

  @Metadata({ data: "json, name=links", elemType: shared.ConceptLinks })
  links?: ConceptLinks[];

  @Metadata({ data: "json, name=scope_notes", elemType: shared.ConceptScopeNotes })
  scopeNotes?: ConceptScopeNotes[];

  @Metadata({ data: "json, name=search_api_query" })
  searchApiQuery?: string;

  @Metadata({ data: "json, name=taxonomy", elemType: shared.ConceptTaxonomy })
  taxonomy?: ConceptTaxonomy[];

  @Metadata({ data: "json, name=vernacular" })
  vernacular?: string;
}
