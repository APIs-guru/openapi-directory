import { SpeakeasyBase } from "../../../internal/utils";
import { PagespeedApiFormatStringV4 } from "./pagespeedapiformatstringv4";
import { PagespeedApiImageV4 } from "./pagespeedapiimagev4";
export declare class PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
    details?: PagespeedApiFormatStringV4[];
    result?: PagespeedApiFormatStringV4;
}
export declare class PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
    header?: PagespeedApiFormatStringV4;
    urls?: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls[];
}
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
export declare class PagespeedApiPagespeedResponseV4FormattedResultsRuleResults extends SpeakeasyBase {
    beta?: boolean;
    groups?: string[];
    localizedRuleName?: string;
    ruleImpact?: number;
    summary?: PagespeedApiFormatStringV4;
    urlBlocks?: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks[];
}
/**
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
export declare class PagespeedApiPagespeedResponseV4FormattedResults extends SpeakeasyBase {
    locale?: string;
    ruleResults?: Map<string, PagespeedApiPagespeedResponseV4FormattedResultsRuleResults>;
}
export declare class PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions extends SpeakeasyBase {
    max?: number;
    min?: number;
    proportion?: number;
}
/**
 * The type of the metric.
**/
export declare class PagespeedApiPagespeedResponseV4LoadingExperienceMetrics extends SpeakeasyBase {
    category?: string;
    distributions?: PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions[];
    median?: number;
}
/**
 * Metrics of end users' page loading experience.
**/
export declare class PagespeedApiPagespeedResponseV4LoadingExperience extends SpeakeasyBase {
    id?: string;
    initialUrl?: string;
    metrics?: Map<string, PagespeedApiPagespeedResponseV4LoadingExperienceMetrics>;
    overallCategory?: string;
}
/**
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
export declare class PagespeedApiPagespeedResponseV4PageStats extends SpeakeasyBase {
    cms?: string;
    cssResponseBytes?: string;
    flashResponseBytes?: string;
    htmlResponseBytes?: string;
    imageResponseBytes?: string;
    javascriptResponseBytes?: string;
    numRenderBlockingRoundTrips?: number;
    numTotalRoundTrips?: number;
    numberCssResources?: number;
    numberHosts?: number;
    numberJsResources?: number;
    numberResources?: number;
    numberRobotedResources?: number;
    numberStaticResources?: number;
    numberTransientFetchFailureResources?: number;
    otherResponseBytes?: string;
    overTheWireResponseBytes?: string;
    robotedUrls?: string[];
    textResponseBytes?: string;
    totalRequestBytes?: string;
    transientFetchFailureUrls?: string[];
}
/**
 * The name of this rule group: one of "SPEED", "USABILITY", or "SECURITY".
**/
export declare class PagespeedApiPagespeedResponseV4RuleGroups extends SpeakeasyBase {
    pass?: boolean;
    score?: number;
}
/**
 * The version of PageSpeed used to generate these results.
**/
export declare class PagespeedApiPagespeedResponseV4Version extends SpeakeasyBase {
    major?: number;
    minor?: number;
}
export declare class PagespeedApiPagespeedResponseV4 extends SpeakeasyBase {
    captchaResult?: string;
    formattedResults?: PagespeedApiPagespeedResponseV4FormattedResults;
    id?: string;
    invalidRules?: string[];
    kind?: string;
    loadingExperience?: PagespeedApiPagespeedResponseV4LoadingExperience;
    pageStats?: PagespeedApiPagespeedResponseV4PageStats;
    responseCode?: number;
    ruleGroups?: Map<string, PagespeedApiPagespeedResponseV4RuleGroups>;
    screenshot?: PagespeedApiImageV4;
    snapshots?: PagespeedApiImageV4[];
    title?: string;
    version?: PagespeedApiPagespeedResponseV4Version;
}
