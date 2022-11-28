import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateBy } from "./aggregateby";
import { BucketByActivity } from "./bucketbyactivity";
import { BucketBySession } from "./bucketbysession";
import { BucketByTime } from "./bucketbytime";
export declare enum AggregateRequestFilteredDataQualityStandardEnum {
    DataQualityUnknown = "dataQualityUnknown",
    DataQualityBloodPressureEsh2002 = "dataQualityBloodPressureEsh2002",
    DataQualityBloodPressureEsh2010 = "dataQualityBloodPressureEsh2010",
    DataQualityBloodPressureAami = "dataQualityBloodPressureAami",
    DataQualityBloodPressureBhsAa = "dataQualityBloodPressureBhsAA",
    DataQualityBloodPressureBhsAb = "dataQualityBloodPressureBhsAB",
    DataQualityBloodPressureBhsBa = "dataQualityBloodPressureBhsBA",
    DataQualityBloodPressureBhsBb = "dataQualityBloodPressureBhsBB",
    DataQualityBloodGlucoseIso151972003 = "dataQualityBloodGlucoseIso151972003",
    DataQualityBloodGlucoseIso151972013 = "dataQualityBloodGlucoseIso151972013"
}
/**
 * Next id: 10
**/
export declare class AggregateRequest extends SpeakeasyBase {
    aggregateBy?: AggregateBy[];
    bucketByActivitySegment?: BucketByActivity;
    bucketByActivityType?: BucketByActivity;
    bucketBySession?: BucketBySession;
    bucketByTime?: BucketByTime;
    endTimeMillis?: string;
    filteredDataQualityStandard?: AggregateRequestFilteredDataQualityStandardEnum[];
    startTimeMillis?: string;
}
