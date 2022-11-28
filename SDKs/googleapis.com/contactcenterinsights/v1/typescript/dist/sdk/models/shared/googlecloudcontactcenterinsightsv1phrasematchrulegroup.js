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
import { GoogleCloudContactcenterinsightsV1PhraseMatchRule } from "./googlecloudcontactcenterinsightsv1phrasematchrule";
export var GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum;
(function (GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum) {
    GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum["PhraseMatchRuleGroupTypeUnspecified"] = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED";
    GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum["AllOf"] = "ALL_OF";
    GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum["AnyOf"] = "ANY_OF";
})(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum || (GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum = {}));
// GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup
/**
 * A message representing a rule in the phrase matcher.
**/
var GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup = /** @class */ (function (_super) {
    __extends(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup, _super);
    function GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phraseMatchRules", elemType: GoogleCloudContactcenterinsightsV1PhraseMatchRule }),
        __metadata("design:type", Array)
    ], GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup.prototype, "phraseMatchRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup.prototype, "type", void 0);
    return GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup;
}(SpeakeasyBase));
export { GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup };
