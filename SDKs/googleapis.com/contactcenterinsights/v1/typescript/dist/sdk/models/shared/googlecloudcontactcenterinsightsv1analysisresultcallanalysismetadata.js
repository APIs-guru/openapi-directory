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
import { GoogleCloudContactcenterinsightsV1CallAnnotation } from "./googlecloudcontactcenterinsightsv1callannotation";
import { GoogleCloudContactcenterinsightsV1Entity } from "./googlecloudcontactcenterinsightsv1entity";
import { GoogleCloudContactcenterinsightsV1Intent } from "./googlecloudcontactcenterinsightsv1intent";
import { GoogleCloudContactcenterinsightsV1IssueModelResult } from "./googlecloudcontactcenterinsightsv1issuemodelresult";
import { GoogleCloudContactcenterinsightsV1PhraseMatchData } from "./googlecloudcontactcenterinsightsv1phrasematchdata";
import { GoogleCloudContactcenterinsightsV1ConversationLevelSentiment } from "./googlecloudcontactcenterinsightsv1conversationlevelsentiment";
// GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata
/**
 * Call-specific metadata created during analysis.
**/
var GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata, _super);
    function GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations", elemType: GoogleCloudContactcenterinsightsV1CallAnnotation }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudContactcenterinsightsV1Entity }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.prototype, "entities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudContactcenterinsightsV1Intent }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.prototype, "intents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issueModelResult" }),
        __metadata("design:type", GoogleCloudContactcenterinsightsV1IssueModelResult)
    ], GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.prototype, "issueModelResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phraseMatchers", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchData }),
        __metadata("design:type", Map)
    ], GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.prototype, "phraseMatchers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentiments", elemType: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata.prototype, "sentiments", void 0);
    return GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata };
