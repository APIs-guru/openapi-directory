import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// ResultFormattedResultsRuleResultsUrlBlocksHeader
/** 
 * Heading to be displayed with the list of URLs.
**/
export class ResultFormattedResultsRuleResultsUrlBlocksHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs })
  args?: ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs[];

  @SpeakeasyMetadata()
  format?: string;
}


export class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  value?: string;
}


export class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs })
  args?: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs[];

  @SpeakeasyMetadata()
  format?: string;
}


export class ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs extends SpeakeasyBase {
  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// ResultFormattedResultsRuleResultsUrlBlocksUrlsResult
/** 
 * A format string that gives information about the URL, and a list of arguments for that format string.
**/
export class ResultFormattedResultsRuleResultsUrlBlocksUrlsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs })
  args?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs[];

  @SpeakeasyMetadata()
  format?: string;
}


export class ResultFormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails })
  details?: ResultFormattedResultsRuleResultsUrlBlocksUrlsDetails[];

  @SpeakeasyMetadata()
  result?: ResultFormattedResultsRuleResultsUrlBlocksUrlsResult;
}


export class ResultFormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  header?: ResultFormattedResultsRuleResultsUrlBlocksHeader;

  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksUrls })
  urls?: ResultFormattedResultsRuleResultsUrlBlocksUrls[];
}


// ResultFormattedResultsRuleResults
/** 
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
export class ResultFormattedResultsRuleResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  localizedRuleName?: string;

  @SpeakeasyMetadata()
  ruleImpact?: number;

  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocks })
  urlBlocks?: ResultFormattedResultsRuleResultsUrlBlocks[];
}


// ResultFormattedResults
/** 
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
export class ResultFormattedResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResults })
  ruleResults?: Map<string, ResultFormattedResultsRuleResults>;
}


// ResultPageStats
/** 
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
export class ResultPageStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cssResponseBytes?: string;

  @SpeakeasyMetadata()
  flashResponseBytes?: string;

  @SpeakeasyMetadata()
  htmlResponseBytes?: string;

  @SpeakeasyMetadata()
  imageResponseBytes?: string;

  @SpeakeasyMetadata()
  javascriptResponseBytes?: string;

  @SpeakeasyMetadata()
  numberCssResources?: number;

  @SpeakeasyMetadata()
  numberHosts?: number;

  @SpeakeasyMetadata()
  numberJsResources?: number;

  @SpeakeasyMetadata()
  numberResources?: number;

  @SpeakeasyMetadata()
  numberStaticResources?: number;

  @SpeakeasyMetadata()
  otherResponseBytes?: string;

  @SpeakeasyMetadata()
  textResponseBytes?: string;

  @SpeakeasyMetadata()
  totalRequestBytes?: string;
}


// ResultScreenshot
/** 
 * Base64-encoded screenshot of the page that was analyzed.
**/
export class ResultScreenshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: string;

  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  mimeType?: string;

  @SpeakeasyMetadata()
  width?: number;
}


// ResultVersion
/** 
 * The version of PageSpeed used to generate these results.
**/
export class ResultVersion extends SpeakeasyBase {
  @SpeakeasyMetadata()
  major?: number;

  @SpeakeasyMetadata()
  minor?: number;
}


export class Result extends SpeakeasyBase {
  @SpeakeasyMetadata()
  captchaResult?: string;

  @SpeakeasyMetadata()
  formattedResults?: ResultFormattedResults;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  invalidRules?: string[];

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  pageStats?: ResultPageStats;

  @SpeakeasyMetadata()
  responseCode?: number;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  screenshot?: ResultScreenshot;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  version?: ResultVersion;
}
