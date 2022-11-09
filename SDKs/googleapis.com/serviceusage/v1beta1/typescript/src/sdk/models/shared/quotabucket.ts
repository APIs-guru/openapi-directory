import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QuotaOverride } from "./quotaoverride";
import { QuotaOverride } from "./quotaoverride";
import { QuotaOverride } from "./quotaoverride";


// QuotaBucket
/** 
 * A quota bucket is a quota provisioning unit for a specific set of dimensions.
**/
export class QuotaBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminOverride" })
  adminOverride?: QuotaOverride;

  @Metadata({ data: "json, name=consumerOverride" })
  consumerOverride?: QuotaOverride;

  @Metadata({ data: "json, name=defaultLimit" })
  defaultLimit?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @Metadata({ data: "json, name=effectiveLimit" })
  effectiveLimit?: string;

  @Metadata({ data: "json, name=producerOverride" })
  producerOverride?: QuotaOverride;
}
