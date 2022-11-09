import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tier
/** 
 * A Google Cloud SQL service tier resource.
**/
export class Tier extends SpeakeasyBase {
  @Metadata({ data: "json, name=DiskQuota" })
  diskQuota?: string;

  @Metadata({ data: "json, name=RAM" })
  ram?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=region" })
  region?: string[];

  @Metadata({ data: "json, name=tier" })
  tier?: string;
}
