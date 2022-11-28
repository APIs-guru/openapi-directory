import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IlbSubsettingConfig
/** 
 * ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
**/
export class IlbSubsettingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
