import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagespeedApiFormatStringV2 } from "./pagespeedapiformatstringv2";
import { PagespeedApiImageV2 } from "./pagespeedapiimagev2";



export class ResultFormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV2 })
  details?: PagespeedApiFormatStringV2[];

  @SpeakeasyMetadata()
  result?: PagespeedApiFormatStringV2;
}


export class ResultFormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  header?: PagespeedApiFormatStringV2;

  @SpeakeasyMetadata({ elemType: ResultFormattedResultsRuleResultsUrlBlocksUrls })
  urls?: ResultFormattedResultsRuleResultsUrlBlocksUrls[];
}


// ResultFormattedResultsRuleResults
/** 
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
export class ResultFormattedResultsRuleResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groups?: string[];

  @SpeakeasyMetadata()
  localizedRuleName?: string;

  @SpeakeasyMetadata()
  ruleImpact?: number;

  @SpeakeasyMetadata()
  summary?: PagespeedApiFormatStringV2;

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


// ResultRuleGroups
/** 
 * The name of this rule group: one of "SPEED" or "USABILITY".
**/
export class ResultRuleGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  score?: number;
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

  @SpeakeasyMetadata({ elemType: ResultRuleGroups })
  ruleGroups?: Map<string, ResultRuleGroups>;

  @SpeakeasyMetadata()
  screenshot?: PagespeedApiImageV2;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  version?: ResultVersion;
}
