import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AggregateBy } from "./aggregateby";
import { BucketByActivity } from "./bucketbyactivity";
import { BucketByActivity } from "./bucketbyactivity";
import { BucketBySession } from "./bucketbysession";
import { BucketByTime } from "./bucketbytime";

export enum AggregateRequestFilteredDataQualityStandardEnum {
    DataQualityUnknown = "dataQualityUnknown"
,    DataQualityBloodPressureEsh2002 = "dataQualityBloodPressureEsh2002"
,    DataQualityBloodPressureEsh2010 = "dataQualityBloodPressureEsh2010"
,    DataQualityBloodPressureAami = "dataQualityBloodPressureAami"
,    DataQualityBloodPressureBhsAa = "dataQualityBloodPressureBhsAA"
,    DataQualityBloodPressureBhsAb = "dataQualityBloodPressureBhsAB"
,    DataQualityBloodPressureBhsBa = "dataQualityBloodPressureBhsBA"
,    DataQualityBloodPressureBhsBb = "dataQualityBloodPressureBhsBB"
,    DataQualityBloodGlucoseIso151972003 = "dataQualityBloodGlucoseIso151972003"
,    DataQualityBloodGlucoseIso151972013 = "dataQualityBloodGlucoseIso151972013"
}


// AggregateRequest
/** 
 * Next id: 10
**/
export class AggregateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregateBy", elemType: shared.AggregateBy })
  aggregateBy?: AggregateBy[];

  @Metadata({ data: "json, name=bucketByActivitySegment" })
  bucketByActivitySegment?: BucketByActivity;

  @Metadata({ data: "json, name=bucketByActivityType" })
  bucketByActivityType?: BucketByActivity;

  @Metadata({ data: "json, name=bucketBySession" })
  bucketBySession?: BucketBySession;

  @Metadata({ data: "json, name=bucketByTime" })
  bucketByTime?: BucketByTime;

  @Metadata({ data: "json, name=endTimeMillis" })
  endTimeMillis?: string;

  @Metadata({ data: "json, name=filteredDataQualityStandard" })
  filteredDataQualityStandard?: AggregateRequestFilteredDataQualityStandardEnum[];

  @Metadata({ data: "json, name=startTimeMillis" })
  startTimeMillis?: string;
}
