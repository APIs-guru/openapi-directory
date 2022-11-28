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
import { PagespeedApiFormatStringV2 } from "./pagespeedapiformatstringv2";
import { PagespeedApiImageV2 } from "./pagespeedapiimagev2";
var ResultFormattedResultsRuleResultsUrlBlocksUrls = /** @class */ (function (_super) {
    __extends(ResultFormattedResultsRuleResultsUrlBlocksUrls, _super);
    function ResultFormattedResultsRuleResultsUrlBlocksUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2 }),
        __metadata("design:type", Array)
    ], ResultFormattedResultsRuleResultsUrlBlocksUrls.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiFormatStringV2)
    ], ResultFormattedResultsRuleResultsUrlBlocksUrls.prototype, "result", void 0);
    return ResultFormattedResultsRuleResultsUrlBlocksUrls;
}(SpeakeasyBase));
export { ResultFormattedResultsRuleResultsUrlBlocksUrls };
var ResultFormattedResultsRuleResultsUrlBlocks = /** @class */ (function (_super) {
    __extends(ResultFormattedResultsRuleResultsUrlBlocks, _super);
    function ResultFormattedResultsRuleResultsUrlBlocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiFormatStringV2)
    ], ResultFormattedResultsRuleResultsUrlBlocks.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksUrls }),
        __metadata("design:type", Array)
    ], ResultFormattedResultsRuleResultsUrlBlocks.prototype, "urls", void 0);
    return ResultFormattedResultsRuleResultsUrlBlocks;
}(SpeakeasyBase));
export { ResultFormattedResultsRuleResultsUrlBlocks };
// ResultFormattedResultsRuleResults
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
var ResultFormattedResultsRuleResults = /** @class */ (function (_super) {
    __extends(ResultFormattedResultsRuleResults, _super);
    function ResultFormattedResultsRuleResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], ResultFormattedResultsRuleResults.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultFormattedResultsRuleResults.prototype, "localizedRuleName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultFormattedResultsRuleResults.prototype, "ruleImpact", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiFormatStringV2)
    ], ResultFormattedResultsRuleResults.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocks }),
        __metadata("design:type", Array)
    ], ResultFormattedResultsRuleResults.prototype, "urlBlocks", void 0);
    return ResultFormattedResultsRuleResults;
}(SpeakeasyBase));
export { ResultFormattedResultsRuleResults };
// ResultFormattedResults
/**
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
var ResultFormattedResults = /** @class */ (function (_super) {
    __extends(ResultFormattedResults, _super);
    function ResultFormattedResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultFormattedResults.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResults }),
        __metadata("design:type", Map)
    ], ResultFormattedResults.prototype, "ruleResults", void 0);
    return ResultFormattedResults;
}(SpeakeasyBase));
export { ResultFormattedResults };
// ResultPageStats
/**
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
var ResultPageStats = /** @class */ (function (_super) {
    __extends(ResultPageStats, _super);
    function ResultPageStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "cssResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "flashResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "htmlResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "imageResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "javascriptResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultPageStats.prototype, "numberCssResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultPageStats.prototype, "numberHosts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultPageStats.prototype, "numberJsResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultPageStats.prototype, "numberResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultPageStats.prototype, "numberStaticResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "otherResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "textResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResultPageStats.prototype, "totalRequestBytes", void 0);
    return ResultPageStats;
}(SpeakeasyBase));
export { ResultPageStats };
// ResultRuleGroups
/**
 * The name of this rule group: one of "SPEED" or "USABILITY".
**/
var ResultRuleGroups = /** @class */ (function (_super) {
    __extends(ResultRuleGroups, _super);
    function ResultRuleGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultRuleGroups.prototype, "score", void 0);
    return ResultRuleGroups;
}(SpeakeasyBase));
export { ResultRuleGroups };
// ResultVersion
/**
 * The version of PageSpeed used to generate these results.
**/
var ResultVersion = /** @class */ (function (_super) {
    __extends(ResultVersion, _super);
    function ResultVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultVersion.prototype, "major", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResultVersion.prototype, "minor", void 0);
    return ResultVersion;
}(SpeakeasyBase));
export { ResultVersion };
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Result.prototype, "captchaResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResultFormattedResults)
    ], Result.prototype, "formattedResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Result.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], Result.prototype, "invalidRules", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Result.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResultPageStats)
    ], Result.prototype, "pageStats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], Result.prototype, "responseCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: ResultRuleGroups }),
        __metadata("design:type", Map)
    ], Result.prototype, "ruleGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiImageV2)
    ], Result.prototype, "screenshot", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], Result.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResultVersion)
    ], Result.prototype, "version", void 0);
    return Result;
}(SpeakeasyBase));
export { Result };
