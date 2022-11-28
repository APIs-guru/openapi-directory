import { SpeakeasyBase } from "../../../internal/utils";
import { ConceptRelation } from "./conceptrelation";
export declare class ConceptArticleListResultsConcepts extends SpeakeasyBase {
    nytdDes?: string[];
    nytdOrg?: string[];
    nytdPer?: string[];
}
export declare class ConceptArticleListResults extends SpeakeasyBase {
    body?: string;
    byline?: string;
    concepts?: ConceptArticleListResultsConcepts;
    date?: string;
    documentType?: string;
    title?: string;
    typeOfMaterial?: string;
    url?: string;
}
export declare class ConceptArticleList extends SpeakeasyBase {
    results?: ConceptArticleListResults[];
    total?: number;
}
export declare class ConceptCombinations extends SpeakeasyBase {
    combinationNote?: string;
    combinationSourceConceptId?: number;
    combinationSourceConceptName?: string;
    combinationSourceConceptType?: string;
    combinationTargetConceptId?: number;
    combinationTargetConceptName?: string;
    combinationTargetConceptType?: string;
}
export declare class ConceptLinks extends SpeakeasyBase {
    conceptId?: number;
    conceptName?: string;
    conceptStatus?: string;
    conceptType?: string;
    isTimesTag?: number;
    link?: string;
    linkId?: number;
    linkType?: string;
    mappingType?: string;
    relation?: string;
}
export declare class ConceptScopeNotes extends SpeakeasyBase {
    scopeNote?: string;
    scopeNoteName?: string;
    scopeNoteType?: string;
}
export declare class ConceptTaxonomy extends SpeakeasyBase {
    sourceConceptId?: number;
    sourceConceptName?: string;
    sourceConceptType?: string;
    sourceConceptVernacular?: string;
    targetConceptId?: number;
    targetConceptName?: string;
    targetConceptType?: string;
    targetConceptVernacular?: string;
    taxonomicRelation?: string;
    taxonomicVerificationStatus?: string;
}
export declare class Concept extends SpeakeasyBase {
    ancestors?: ConceptRelation[];
    articleList?: ConceptArticleList;
    combinations?: ConceptCombinations[];
    conceptCreated?: string;
    conceptId?: number;
    conceptName?: string;
    conceptStatus?: string;
    conceptType?: string;
    conceptUpdated?: string;
    descendants?: ConceptRelation[];
    isTimesTag?: number;
    links?: ConceptLinks[];
    scopeNotes?: ConceptScopeNotes[];
    searchApiQuery?: string;
    taxonomy?: ConceptTaxonomy[];
    vernacular?: string;
}
