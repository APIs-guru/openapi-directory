import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * Heading to be displayed with the list of URLs.
**/
export declare class ResultFormattedResultsRuleResultsUrlBlocksHeader extends SpeakeasyBase {
    args?: ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs[];
    format?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails extends SpeakeasyBase {
    args?: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs[];
    format?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs extends SpeakeasyBase {
    type?: string;
    value?: string;
}
/**
 * A format string that gives information about the URL, and a list of arguments for that format string.
**/
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrlsResult extends SpeakeasyBase {
    args?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs[];
    format?: string;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
    details?: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails[];
    result?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResult;
}
export declare class ResultFormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
    header?: ResultFormattedResultsRuleResultsUrlBlocksHeader;
    urls?: ResultFormattedResultsRuleResultsUrlBlocksUrls[];
}
/**
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
export declare class ResultFormattedResultsRuleResults extends SpeakeasyBase {
    localizedRuleName?: string;
    ruleImpact?: number;
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
 * Base64-encoded screenshot of the page that was analyzed.
**/
export declare class ResultScreenshot extends SpeakeasyBase {
    data?: string;
    height?: number;
    mimeType?: string;
    width?: number;
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
    score?: number;
    screenshot?: ResultScreenshot;
    title?: string;
    version?: ResultVersion;
}
