import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumerQuotaLimit } from "./consumerquotalimit";
import { ConsumerQuotaLimit } from "./consumerquotalimit";


// ConsumerQuotaMetric
/** 
 * Consumer quota settings for a quota metric.
**/
export class ConsumerQuotaMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerQuotaLimits", elemType: shared.ConsumerQuotaLimit })
  consumerQuotaLimits?: ConsumerQuotaLimit[];

  @Metadata({ data: "json, name=descendantConsumerQuotaLimits", elemType: shared.ConsumerQuotaLimit })
  descendantConsumerQuotaLimits?: ConsumerQuotaLimit[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=metric" })
  metric?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
