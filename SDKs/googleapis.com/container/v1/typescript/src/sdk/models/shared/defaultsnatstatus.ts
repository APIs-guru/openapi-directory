import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultSnatStatus
/** 
 * DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
**/
export class DefaultSnatStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;
}
