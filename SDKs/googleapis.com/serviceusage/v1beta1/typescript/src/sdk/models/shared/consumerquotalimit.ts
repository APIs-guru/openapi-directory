import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuotaBucket } from "./quotabucket";


// ConsumerQuotaLimit
/** 
 * Consumer quota settings for a quota limit.
**/
export class ConsumerQuotaLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowsAdminOverrides" })
  allowsAdminOverrides?: boolean;

  @Metadata({ data: "json, name=isPrecise" })
  isPrecise?: boolean;

  @Metadata({ data: "json, name=metric" })
  metric?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quotaBuckets", elemType: shared.QuotaBucket })
  quotaBuckets?: QuotaBucket[];

  @Metadata({ data: "json, name=supportedLocations" })
  supportedLocations?: string[];

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
