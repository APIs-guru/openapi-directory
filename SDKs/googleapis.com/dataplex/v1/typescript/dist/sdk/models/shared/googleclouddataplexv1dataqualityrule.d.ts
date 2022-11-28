import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRuleRangeExpectation } from "./googleclouddataplexv1dataqualityrulerangeexpectation";
import { GoogleCloudDataplexV1DataQualityRuleRegexExpectation } from "./googleclouddataplexv1dataqualityruleregexexpectation";
import { GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation } from "./googleclouddataplexv1dataqualityrulerowconditionexpectation";
import { GoogleCloudDataplexV1DataQualityRuleSetExpectation } from "./googleclouddataplexv1dataqualityrulesetexpectation";
import { GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation } from "./googleclouddataplexv1dataqualityrulestatisticrangeexpectation";
import { GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation } from "./googleclouddataplexv1dataqualityruletableconditionexpectation";
/**
 * A rule captures data quality intent about a data source.
**/
export declare class GoogleCloudDataplexV1DataQualityRule extends SpeakeasyBase {
    column?: string;
    dimension?: string;
    ignoreNull?: boolean;
    nonNullExpectation?: Map<string, any>;
    rangeExpectation?: GoogleCloudDataplexV1DataQualityRuleRangeExpectation;
    regexExpectation?: GoogleCloudDataplexV1DataQualityRuleRegexExpectation;
    rowConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation;
    setExpectation?: GoogleCloudDataplexV1DataQualityRuleSetExpectation;
    statisticRangeExpectation?: GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation;
    tableConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation;
    threshold?: number;
    uniquenessExpectation?: Map<string, any>;
}
