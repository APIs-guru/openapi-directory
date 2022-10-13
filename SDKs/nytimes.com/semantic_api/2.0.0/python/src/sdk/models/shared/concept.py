from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import conceptrelation
from . import conceptrelation


@dataclass_json
@dataclass
class ConceptArticleListResultsConcepts:
    nytd_des: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nytd_des' }})
    nytd_org: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nytd_org' }})
    nytd_per: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nytd_per' }})
    

@dataclass_json
@dataclass
class ConceptArticleListResults:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    byline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'byline' }})
    concepts: Optional[ConceptArticleListResultsConcepts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concepts' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    document_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_type' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type_of_material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_of_material' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ConceptArticleList:
    results: Optional[List[ConceptArticleListResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ConceptCombinations:
    combination_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_note' }})
    combination_source_concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_source_concept_id' }})
    combination_source_concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_source_concept_name' }})
    combination_source_concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_source_concept_type' }})
    combination_target_concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_target_concept_id' }})
    combination_target_concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_target_concept_name' }})
    combination_target_concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combination_target_concept_type' }})
    

@dataclass_json
@dataclass
class ConceptLinks:
    concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_id' }})
    concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_name' }})
    concept_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_status' }})
    concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_type' }})
    is_times_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_times_tag' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_id' }})
    link_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_type' }})
    mapping_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapping_type' }})
    relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relation' }})
    

@dataclass_json
@dataclass
class ConceptScopeNotes:
    scope_note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope_note' }})
    scope_note_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope_note_name' }})
    scope_note_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope_note_type' }})
    

@dataclass_json
@dataclass
class ConceptTaxonomy:
    source_concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_concept_id' }})
    source_concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_concept_name' }})
    source_concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_concept_type' }})
    source_concept_vernacular: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_concept_vernacular' }})
    target_concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_concept_id' }})
    target_concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_concept_name' }})
    target_concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_concept_type' }})
    target_concept_vernacular: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_concept_vernacular' }})
    taxonomic_relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomic_relation' }})
    taxonomic_verification_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomic_verification_status' }})
    

@dataclass_json
@dataclass
class Concept:
    ancestors: Optional[List[conceptrelation.ConceptRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ancestors' }})
    article_list: Optional[ConceptArticleList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'article_list' }})
    combinations: Optional[List[ConceptCombinations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combinations' }})
    concept_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_created' }})
    concept_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_id' }})
    concept_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_name' }})
    concept_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_status' }})
    concept_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_type' }})
    concept_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concept_updated' }})
    descendants: Optional[List[conceptrelation.ConceptRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descendants' }})
    is_times_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_times_tag' }})
    links: Optional[List[ConceptLinks]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    scope_notes: Optional[List[ConceptScopeNotes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope_notes' }})
    search_api_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_api_query' }})
    taxonomy: Optional[List[ConceptTaxonomy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomy' }})
    vernacular: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vernacular' }})
    
