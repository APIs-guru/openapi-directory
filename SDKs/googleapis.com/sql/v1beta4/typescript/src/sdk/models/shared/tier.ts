import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tier
/** 
 * A Google Cloud SQL service tier resource.
**/
export class Tier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DiskQuota" })
  diskQuota?: string;

  @SpeakeasyMetadata({ data: "json, name=RAM" })
  ram?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string[];

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: string;
}
