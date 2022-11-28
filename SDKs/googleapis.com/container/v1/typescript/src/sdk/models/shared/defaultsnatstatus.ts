import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultSnatStatus
/** 
 * DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
**/
export class DefaultSnatStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
