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
import { GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup } from "./googlecloudcontactcenterinsightsv1phrasematchrulegroup";
export var GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum;
(function (GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum) {
    GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum["RoleUnspecified"] = "ROLE_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum["HumanAgent"] = "HUMAN_AGENT";
    GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum["AutomatedAgent"] = "AUTOMATED_AGENT";
    GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum["EndUser"] = "END_USER";
    GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum["AnyAgent"] = "ANY_AGENT";
})(GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum || (GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum = {}));
export var GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum;
(function (GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum) {
    GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum["PhraseMatcherTypeUnspecified"] = "PHRASE_MATCHER_TYPE_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum["AllOf"] = "ALL_OF";
    GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum["AnyOf"] = "ANY_OF";
})(GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum || (GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum = {}));
// GoogleCloudContactcenterinsightsV1PhraseMatcherInput
/**
 * The phrase matcher resource.
**/
var GoogleCloudContactcenterinsightsV1PhraseMatcherInput = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1PhraseMatcherInput, _super);
    function GoogleCloudContactcenterinsightsV1PhraseMatcherInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phraseMatchRuleGroups", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "phraseMatchRuleGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleMatch" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "roleMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionTag" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcherInput.prototype, "versionTag", void 0);
    return GoogleCloudContactcenterinsightsV1PhraseMatcherInput;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1PhraseMatcherInput };
// GoogleCloudContactcenterinsightsV1PhraseMatcher
/**
 * The phrase matcher resource.
**/
var GoogleCloudContactcenterinsightsV1PhraseMatcher = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1PhraseMatcher, _super);
    function GoogleCloudContactcenterinsightsV1PhraseMatcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "activationUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phraseMatchRuleGroups", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "phraseMatchRuleGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionCreateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "revisionCreateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionId" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "revisionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roleMatch" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "roleMatch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionTag" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatcher.prototype, "versionTag", void 0);
    return GoogleCloudContactcenterinsightsV1PhraseMatcher;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1PhraseMatcher };
