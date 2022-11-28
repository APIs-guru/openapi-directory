import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaOverride } from "./quotaoverride";



// QuotaBucket
/** 
 * A quota bucket is a quota provisioning unit for a specific set of dimensions.
**/
export class QuotaBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminOverride" })
  adminOverride?: QuotaOverride;

  @SpeakeasyMetadata({ data: "json, name=consumerOverride" })
  consumerOverride?: QuotaOverride;

  @SpeakeasyMetadata({ data: "json, name=defaultLimit" })
  defaultLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=effectiveLimit" })
  effectiveLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=producerOverride" })
  producerOverride?: QuotaOverride;
}
