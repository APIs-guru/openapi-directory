import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IlbSubsettingConfig
/** 
 * ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
**/
export class IlbSubsettingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
