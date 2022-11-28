import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaBucket } from "./quotabucket";



// ConsumerQuotaLimit
/** 
 * Consumer quota settings for a quota limit.
**/
export class ConsumerQuotaLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowsAdminOverrides" })
  allowsAdminOverrides?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPrecise" })
  isPrecise?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quotaBuckets", elemType: QuotaBucket })
  quotaBuckets?: QuotaBucket[];

  @SpeakeasyMetadata({ data: "json, name=supportedLocations" })
  supportedLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
