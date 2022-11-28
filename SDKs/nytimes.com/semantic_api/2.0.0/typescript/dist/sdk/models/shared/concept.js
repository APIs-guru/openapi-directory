var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConceptRelation } from "./conceptrelation";
var ConceptArticleListResultsConcepts = /** @class */ (function (_super) {
    __extends(ConceptArticleListResultsConcepts, _super);
    function ConceptArticleListResultsConcepts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nytd_des" }),
        __metadata("design:type", Array)
    ], ConceptArticleListResultsConcepts.prototype, "nytdDes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nytd_org" }),
        __metadata("design:type", Array)
    ], ConceptArticleListResultsConcepts.prototype, "nytdOrg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nytd_per" }),
        __metadata("design:type", Array)
    ], ConceptArticleListResultsConcepts.prototype, "nytdPer", void 0);
    return ConceptArticleListResultsConcepts;
}(SpeakeasyBase));
export { ConceptArticleListResultsConcepts };
var ConceptArticleListResults = /** @class */ (function (_super) {
    __extends(ConceptArticleListResults, _super);
    function ConceptArticleListResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=byline" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "byline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concepts" }),
        __metadata("design:type", ConceptArticleListResultsConcepts)
    ], ConceptArticleListResults.prototype, "concepts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document_type" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "documentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_of_material" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "typeOfMaterial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ConceptArticleListResults.prototype, "url", void 0);
    return ConceptArticleListResults;
}(SpeakeasyBase));
export { ConceptArticleListResults };
var ConceptArticleList = /** @class */ (function (_super) {
    __extends(ConceptArticleList, _super);
    function ConceptArticleList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: ConceptArticleListResults }),
        __metadata("design:type", Array)
    ], ConceptArticleList.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ConceptArticleList.prototype, "total", void 0);
    return ConceptArticleList;
}(SpeakeasyBase));
export { ConceptArticleList };
var ConceptCombinations = /** @class */ (function (_super) {
    __extends(ConceptCombinations, _super);
    function ConceptCombinations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_note" }),
        __metadata("design:type", String)
    ], ConceptCombinations.prototype, "combinationNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_source_concept_id" }),
        __metadata("design:type", Number)
    ], ConceptCombinations.prototype, "combinationSourceConceptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_source_concept_name" }),
        __metadata("design:type", String)
    ], ConceptCombinations.prototype, "combinationSourceConceptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_source_concept_type" }),
        __metadata("design:type", String)
    ], ConceptCombinations.prototype, "combinationSourceConceptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_target_concept_id" }),
        __metadata("design:type", Number)
    ], ConceptCombinations.prototype, "combinationTargetConceptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_target_concept_name" }),
        __metadata("design:type", String)
    ], ConceptCombinations.prototype, "combinationTargetConceptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combination_target_concept_type" }),
        __metadata("design:type", String)
    ], ConceptCombinations.prototype, "combinationTargetConceptType", void 0);
    return ConceptCombinations;
}(SpeakeasyBase));
export { ConceptCombinations };
var ConceptLinks = /** @class */ (function (_super) {
    __extends(ConceptLinks, _super);
    function ConceptLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_id" }),
        __metadata("design:type", Number)
    ], ConceptLinks.prototype, "conceptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_name" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "conceptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_status" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "conceptStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_type" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "conceptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_times_tag" }),
        __metadata("design:type", Number)
    ], ConceptLinks.prototype, "isTimesTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], ConceptLinks.prototype, "linkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link_type" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "linkType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mapping_type" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "mappingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relation" }),
        __metadata("design:type", String)
    ], ConceptLinks.prototype, "relation", void 0);
    return ConceptLinks;
}(SpeakeasyBase));
export { ConceptLinks };
var ConceptScopeNotes = /** @class */ (function (_super) {
    __extends(ConceptScopeNotes, _super);
    function ConceptScopeNotes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope_note" }),
        __metadata("design:type", String)
    ], ConceptScopeNotes.prototype, "scopeNote", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope_note_name" }),
        __metadata("design:type", String)
    ], ConceptScopeNotes.prototype, "scopeNoteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope_note_type" }),
        __metadata("design:type", String)
    ], ConceptScopeNotes.prototype, "scopeNoteType", void 0);
    return ConceptScopeNotes;
}(SpeakeasyBase));
export { ConceptScopeNotes };
var ConceptTaxonomy = /** @class */ (function (_super) {
    __extends(ConceptTaxonomy, _super);
    function ConceptTaxonomy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_concept_id" }),
        __metadata("design:type", Number)
    ], ConceptTaxonomy.prototype, "sourceConceptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_concept_name" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "sourceConceptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_concept_type" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "sourceConceptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_concept_vernacular" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "sourceConceptVernacular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_concept_id" }),
        __metadata("design:type", Number)
    ], ConceptTaxonomy.prototype, "targetConceptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_concept_name" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "targetConceptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_concept_type" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "targetConceptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target_concept_vernacular" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "targetConceptVernacular", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomic_relation" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "taxonomicRelation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomic_verification_status" }),
        __metadata("design:type", String)
    ], ConceptTaxonomy.prototype, "taxonomicVerificationStatus", void 0);
    return ConceptTaxonomy;
}(SpeakeasyBase));
export { ConceptTaxonomy };
var Concept = /** @class */ (function (_super) {
    __extends(Concept, _super);
    function Concept() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ancestors", elemType: ConceptRelation }),
        __metadata("design:type", Array)
    ], Concept.prototype, "ancestors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=article_list" }),
        __metadata("design:type", ConceptArticleList)
    ], Concept.prototype, "articleList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=combinations", elemType: ConceptCombinations }),
        __metadata("design:type", Array)
    ], Concept.prototype, "combinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_created" }),
        __metadata("design:type", String)
    ], Concept.prototype, "conceptCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_id" }),
        __metadata("design:type", Number)
    ], Concept.prototype, "conceptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_name" }),
        __metadata("design:type", String)
    ], Concept.prototype, "conceptName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_status" }),
        __metadata("design:type", String)
    ], Concept.prototype, "conceptStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_type" }),
        __metadata("design:type", String)
    ], Concept.prototype, "conceptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=concept_updated" }),
        __metadata("design:type", String)
    ], Concept.prototype, "conceptUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=descendants", elemType: ConceptRelation }),
        __metadata("design:type", Array)
    ], Concept.prototype, "descendants", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_times_tag" }),
        __metadata("design:type", Number)
    ], Concept.prototype, "isTimesTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links", elemType: ConceptLinks }),
        __metadata("design:type", Array)
    ], Concept.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope_notes", elemType: ConceptScopeNotes }),
        __metadata("design:type", Array)
    ], Concept.prototype, "scopeNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=search_api_query" }),
        __metadata("design:type", String)
    ], Concept.prototype, "searchApiQuery", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taxonomy", elemType: ConceptTaxonomy }),
        __metadata("design:type", Array)
    ], Concept.prototype, "taxonomy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vernacular" }),
        __metadata("design:type", String)
    ], Concept.prototype, "vernacular", void 0);
    return Concept;
}(SpeakeasyBase));
export { Concept };
