import { SpeakeasyBase } from "../../../internal/utils";
import { PagespeedApiFormatStringV2 } from "./pagespeedapiformatstringv2";
import { PagespeedApiImageV2 } from "./pagespeedapiimagev2";
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
    details?: PagespeedApiFormatStringV2[];
    result?: PagespeedApiFormatStringV2;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
    header?: PagespeedApiFormatStringV2;
    urls?: ResultFormattedResultsRuleResultsUrlBlocksUrls[];
}
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
export declare class ResultFormattedResultsRuleResults extends SpeakeasyBase {
    groups?: string[];
    localizedRuleName?: string;
    ruleImpact?: number;
    summary?: PagespeedApiFormatStringV2;
    urlBlocks?: ResultFormattedResultsRuleResultsUrlBlocks[];
}
/**
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
export declare class ResultFormattedResults extends SpeakeasyBase {
    locale?: string;
    ruleResults?: Map<string, ResultFormattedResultsRuleResults>;
}
/**
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
export declare class ResultPageStats extends SpeakeasyBase {
    cssResponseBytes?: string;
    flashResponseBytes?: string;
    htmlResponseBytes?: string;
    imageResponseBytes?: string;
    javascriptResponseBytes?: string;
    numberCssResources?: number;
    numberHosts?: number;
    numberJsResources?: number;
    numberResources?: number;
    numberStaticResources?: number;
    otherResponseBytes?: string;
    textResponseBytes?: string;
    totalRequestBytes?: string;
}
/**
 * The name of this rule group: one of "SPEED" or "USABILITY".
**/
export declare class ResultRuleGroups extends SpeakeasyBase {
    score?: number;
}
/**
 * The version of PageSpeed used to generate these results.
**/
export declare class ResultVersion extends SpeakeasyBase {
    major?: number;
    minor?: number;
}
export declare class Result extends SpeakeasyBase {
    captchaResult?: string;
    formattedResults?: ResultFormattedResults;
    id?: string;
    invalidRules?: string[];
    kind?: string;
    pageStats?: ResultPageStats;
    responseCode?: number;
    ruleGroups?: Map<string, ResultRuleGroups>;
    screenshot?: PagespeedApiImageV2;
    title?: string;
    version?: ResultVersion;
}
