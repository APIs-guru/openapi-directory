import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagespeedApiFormatStringV4 } from "./pagespeedapiformatstringv4";
import { PagespeedApiImageV4 } from "./pagespeedapiimagev4";



export class PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PagespeedApiFormatStringV4 })
  details?: PagespeedApiFormatStringV4[];

  @SpeakeasyMetadata()
  result?: PagespeedApiFormatStringV4;
}


export class PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  header?: PagespeedApiFormatStringV4;

  @SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls })
  urls?: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocksUrls[];
}


// PagespeedApiPagespeedResponseV4FormattedResultsRuleResults
/** 
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
export class PagespeedApiPagespeedResponseV4FormattedResultsRuleResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beta?: boolean;

  @SpeakeasyMetadata()
  groups?: string[];

  @SpeakeasyMetadata()
  localizedRuleName?: string;

  @SpeakeasyMetadata()
  ruleImpact?: number;

  @SpeakeasyMetadata()
  summary?: PagespeedApiFormatStringV4;

  @SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks })
  urlBlocks?: PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks[];
}


// PagespeedApiPagespeedResponseV4FormattedResults
/** 
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
export class PagespeedApiPagespeedResponseV4FormattedResults extends SpeakeasyBase {
  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4FormattedResultsRuleResults })
  ruleResults?: Map<string, PagespeedApiPagespeedResponseV4FormattedResultsRuleResults>;
}


export class PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  max?: number;

  @SpeakeasyMetadata()
  min?: number;

  @SpeakeasyMetadata()
  proportion?: number;
}


// PagespeedApiPagespeedResponseV4LoadingExperienceMetrics
/** 
 * The type of the metric.
**/
export class PagespeedApiPagespeedResponseV4LoadingExperienceMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata()
  category?: string;

  @SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions })
  distributions?: PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions[];

  @SpeakeasyMetadata()
  median?: number;
}


// PagespeedApiPagespeedResponseV4LoadingExperience
/** 
 * Metrics of end users' page loading experience.
**/
export class PagespeedApiPagespeedResponseV4LoadingExperience extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  initialUrl?: string;

  @SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4LoadingExperienceMetrics })
  metrics?: Map<string, PagespeedApiPagespeedResponseV4LoadingExperienceMetrics>;

  @SpeakeasyMetadata()
  overallCategory?: string;
}


// PagespeedApiPagespeedResponseV4PageStats
/** 
 * Summary statistics for the page, such as number of JavaScript bytes, number of HTML bytes, etc.
**/
export class PagespeedApiPagespeedResponseV4PageStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cms?: string;

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
  numRenderBlockingRoundTrips?: number;

  @SpeakeasyMetadata()
  numTotalRoundTrips?: number;

  @SpeakeasyMetadata()
  numberCssResources?: number;

  @SpeakeasyMetadata()
  numberHosts?: number;

  @SpeakeasyMetadata()
  numberJsResources?: number;

  @SpeakeasyMetadata()
  numberResources?: number;

  @SpeakeasyMetadata()
  numberRobotedResources?: number;

  @SpeakeasyMetadata()
  numberStaticResources?: number;

  @SpeakeasyMetadata()
  numberTransientFetchFailureResources?: number;

  @SpeakeasyMetadata()
  otherResponseBytes?: string;

  @SpeakeasyMetadata()
  overTheWireResponseBytes?: string;

  @SpeakeasyMetadata()
  robotedUrls?: string[];

  @SpeakeasyMetadata()
  textResponseBytes?: string;

  @SpeakeasyMetadata()
  totalRequestBytes?: string;

  @SpeakeasyMetadata()
  transientFetchFailureUrls?: string[];
}


// PagespeedApiPagespeedResponseV4RuleGroups
/** 
 * The name of this rule group: one of "SPEED", "USABILITY", or "SECURITY".
**/
export class PagespeedApiPagespeedResponseV4RuleGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pass?: boolean;

  @SpeakeasyMetadata()
  score?: number;
}


// PagespeedApiPagespeedResponseV4Version
/** 
 * The version of PageSpeed used to generate these results.
**/
export class PagespeedApiPagespeedResponseV4Version extends SpeakeasyBase {
  @SpeakeasyMetadata()
  major?: number;

  @SpeakeasyMetadata()
  minor?: number;
}


export class PagespeedApiPagespeedResponseV4 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  captchaResult?: string;

  @SpeakeasyMetadata()
  formattedResults?: PagespeedApiPagespeedResponseV4FormattedResults;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  invalidRules?: string[];

  @SpeakeasyMetadata()
  kind?: string;

  @SpeakeasyMetadata()
  loadingExperience?: PagespeedApiPagespeedResponseV4LoadingExperience;

  @SpeakeasyMetadata()
  pageStats?: PagespeedApiPagespeedResponseV4PageStats;

  @SpeakeasyMetadata()
  responseCode?: number;

  @SpeakeasyMetadata({ elemType: PagespeedApiPagespeedResponseV4RuleGroups })
  ruleGroups?: Map<string, PagespeedApiPagespeedResponseV4RuleGroups>;

  @SpeakeasyMetadata()
  screenshot?: PagespeedApiImageV4;

  @SpeakeasyMetadata({ elemType: PagespeedApiImageV4 })
  snapshots?: PagespeedApiImageV4[];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  version?: PagespeedApiPagespeedResponseV4Version;
}
