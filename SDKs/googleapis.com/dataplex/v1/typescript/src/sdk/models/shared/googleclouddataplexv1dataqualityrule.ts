import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRuleRangeExpectation } from "./googleclouddataplexv1dataqualityrulerangeexpectation";
import { GoogleCloudDataplexV1DataQualityRuleRegexExpectation } from "./googleclouddataplexv1dataqualityruleregexexpectation";
import { GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation } from "./googleclouddataplexv1dataqualityrulerowconditionexpectation";
import { GoogleCloudDataplexV1DataQualityRuleSetExpectation } from "./googleclouddataplexv1dataqualityrulesetexpectation";
import { GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation } from "./googleclouddataplexv1dataqualityrulestatisticrangeexpectation";
import { GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation } from "./googleclouddataplexv1dataqualityruletableconditionexpectation";



// GoogleCloudDataplexV1DataQualityRule
/** 
 * A rule captures data quality intent about a data source.
**/
export class GoogleCloudDataplexV1DataQualityRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreNull" })
  ignoreNull?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nonNullExpectation" })
  nonNullExpectation?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rangeExpectation" })
  rangeExpectation?: GoogleCloudDataplexV1DataQualityRuleRangeExpectation;

  @SpeakeasyMetadata({ data: "json, name=regexExpectation" })
  regexExpectation?: GoogleCloudDataplexV1DataQualityRuleRegexExpectation;

  @SpeakeasyMetadata({ data: "json, name=rowConditionExpectation" })
  rowConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;

  @SpeakeasyMetadata({ data: "json, name=setExpectation" })
  setExpectation?: GoogleCloudDataplexV1DataQualityRuleSetExpectation;

  @SpeakeasyMetadata({ data: "json, name=statisticRangeExpectation" })
  statisticRangeExpectation?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;

  @SpeakeasyMetadata({ data: "json, name=tableConditionExpectation" })
  tableConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: number;

  @SpeakeasyMetadata({ data: "json, name=uniquenessExpectation" })
  uniquenessExpectation?: Map<string, any>;
}
