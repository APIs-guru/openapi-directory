import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerQuotaLimit } from "./consumerquotalimit";



// ConsumerQuotaMetric
/** 
 * Consumer quota settings for a quota metric.
**/
export class ConsumerQuotaMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerQuotaLimits", elemType: ConsumerQuotaLimit })
  consumerQuotaLimits?: ConsumerQuotaLimit[];

  @SpeakeasyMetadata({ data: "json, name=descendantConsumerQuotaLimits", elemType: ConsumerQuotaLimit })
  descendantConsumerQuotaLimits?: ConsumerQuotaLimit[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
