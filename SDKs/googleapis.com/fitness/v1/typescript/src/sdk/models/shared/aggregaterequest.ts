import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateBy } from "./aggregateby";
import { BucketByActivity } from "./bucketbyactivity";
import { BucketBySession } from "./bucketbysession";
import { BucketByTime } from "./bucketbytime";


export enum AggregateRequestFilteredDataQualityStandardEnum {
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


// AggregateRequest
/** 
 * Next id: 10
**/
export class AggregateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateBy", elemType: AggregateBy })
  aggregateBy?: AggregateBy[];

  @SpeakeasyMetadata({ data: "json, name=bucketByActivitySegment" })
  bucketByActivitySegment?: BucketByActivity;

  @SpeakeasyMetadata({ data: "json, name=bucketByActivityType" })
  bucketByActivityType?: BucketByActivity;

  @SpeakeasyMetadata({ data: "json, name=bucketBySession" })
  bucketBySession?: BucketBySession;

  @SpeakeasyMetadata({ data: "json, name=bucketByTime" })
  bucketByTime?: BucketByTime;

  @SpeakeasyMetadata({ data: "json, name=endTimeMillis" })
  endTimeMillis?: string;

  @SpeakeasyMetadata({ data: "json, name=filteredDataQualityStandard" })
  filteredDataQualityStandard?: AggregateRequestFilteredDataQualityStandardEnum[];

  @SpeakeasyMetadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;
}
