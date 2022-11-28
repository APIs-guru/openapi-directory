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
import { PagespeedApiFormatStringV4 } from "./pagespeedapiformatstringv4";
import { PagespeedApiImageV4 } from "./pagespeedapiimagev4";
var PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls, _super);
    function PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4 }),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiFormatStringV4)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls.prototype, "result", void 0);
    return PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls };
var PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks, _super);
    function PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiFormatStringV4)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks.prototype, "header", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls }),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks.prototype, "urls", void 0);
    return PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks };
// PagespeedApiPagespeedResponseV4FormattedResultsRuleResults
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
var PagespeedApiPagespeedResponseV4FormattedResultsRuleResults = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4FormattedResultsRuleResults, _super);
    function PagespeedApiPagespeedResponseV4FormattedResultsRuleResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResults.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResults.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResults.prototype, "localizedRuleName", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResults.prototype, "ruleImpact", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiFormatStringV4)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResults.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks }),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4FormattedResultsRuleResults.prototype, "urlBlocks", void 0);
    return PagespeedApiPagespeedResponseV4FormattedResultsRuleResults;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4FormattedResultsRuleResults };
// PagespeedApiPagespeedResponseV4FormattedResults
/**
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
var PagespeedApiPagespeedResponseV4FormattedResults = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4FormattedResults, _super);
    function PagespeedApiPagespeedResponseV4FormattedResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4FormattedResults.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4FormattedResultsRuleResults }),
        __metadata("design:type", Map)
    ], PagespeedApiPagespeedResponseV4FormattedResults.prototype, "ruleResults", void 0);
    return PagespeedApiPagespeedResponseV4FormattedResults;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4FormattedResults };
var PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions, _super);
    function PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions.prototype, "min", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions.prototype, "proportion", void 0);
    return PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions };
// PagespeedApiPagespeedResponseV4LoadingExperienceMetrics
/**
 * The type of the metric.
**/
var PagespeedApiPagespeedResponseV4LoadingExperienceMetrics = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4LoadingExperienceMetrics, _super);
    function PagespeedApiPagespeedResponseV4LoadingExperienceMetrics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4LoadingExperienceMetrics.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions }),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4LoadingExperienceMetrics.prototype, "distributions", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4LoadingExperienceMetrics.prototype, "median", void 0);
    return PagespeedApiPagespeedResponseV4LoadingExperienceMetrics;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4LoadingExperienceMetrics };
// PagespeedApiPagespeedResponseV4LoadingExperience
/**
 * Metrics of end users' page loading experience.
**/
var PagespeedApiPagespeedResponseV4LoadingExperience = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4LoadingExperience, _super);
    function PagespeedApiPagespeedResponseV4LoadingExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4LoadingExperience.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4LoadingExperience.prototype, "initialUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4LoadingExperienceMetrics }),
        __metadata("design:type", Map)
    ], PagespeedApiPagespeedResponseV4LoadingExperience.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4LoadingExperience.prototype, "overallCategory", void 0);
    return PagespeedApiPagespeedResponseV4LoadingExperience;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4LoadingExperience };
// PagespeedApiPagespeedResponseV4PageStats
/**
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
var PagespeedApiPagespeedResponseV4PageStats = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4PageStats, _super);
    function PagespeedApiPagespeedResponseV4PageStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "cms", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "cssResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "flashResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "htmlResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "imageResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "javascriptResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numRenderBlockingRoundTrips", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numTotalRoundTrips", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberCssResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberHosts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberJsResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberRobotedResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberStaticResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "numberTransientFetchFailureResources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "otherResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "overTheWireResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "robotedUrls", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "textResponseBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "totalRequestBytes", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4PageStats.prototype, "transientFetchFailureUrls", void 0);
    return PagespeedApiPagespeedResponseV4PageStats;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4PageStats };
// PagespeedApiPagespeedResponseV4RuleGroups
/**
 * The name of this rule group: one of "SPEED", "USABILITY", or "SECURITY".
**/
var PagespeedApiPagespeedResponseV4RuleGroups = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4RuleGroups, _super);
    function PagespeedApiPagespeedResponseV4RuleGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Boolean)
    ], PagespeedApiPagespeedResponseV4RuleGroups.prototype, "pass", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4RuleGroups.prototype, "score", void 0);
    return PagespeedApiPagespeedResponseV4RuleGroups;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4RuleGroups };
// PagespeedApiPagespeedResponseV4Version
/**
 * The version of PageSpeed used to generate these results.
**/
var PagespeedApiPagespeedResponseV4Version = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4Version, _super);
    function PagespeedApiPagespeedResponseV4Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4Version.prototype, "major", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4Version.prototype, "minor", void 0);
    return PagespeedApiPagespeedResponseV4Version;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4Version };
var PagespeedApiPagespeedResponseV4 = /** @class */ (function (_super) {
    __extends(PagespeedApiPagespeedResponseV4, _super);
    function PagespeedApiPagespeedResponseV4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4.prototype, "captchaResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiPagespeedResponseV4FormattedResults)
    ], PagespeedApiPagespeedResponseV4.prototype, "formattedResults", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4.prototype, "invalidRules", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiPagespeedResponseV4LoadingExperience)
    ], PagespeedApiPagespeedResponseV4.prototype, "loadingExperience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiPagespeedResponseV4PageStats)
    ], PagespeedApiPagespeedResponseV4.prototype, "pageStats", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedApiPagespeedResponseV4.prototype, "responseCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4RuleGroups }),
        __metadata("design:type", Map)
    ], PagespeedApiPagespeedResponseV4.prototype, "ruleGroups", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiImageV4)
    ], PagespeedApiPagespeedResponseV4.prototype, "screenshot", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: PagespeedApiImageV4 }),
        __metadata("design:type", Array)
    ], PagespeedApiPagespeedResponseV4.prototype, "snapshots", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedApiPagespeedResponseV4.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedApiPagespeedResponseV4Version)
    ], PagespeedApiPagespeedResponseV4.prototype, "version", void 0);
    return PagespeedApiPagespeedResponseV4;
}(SpeakeasyBase));
export { PagespeedApiPagespeedResponseV4 };
