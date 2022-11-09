import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeteringMembershipState
/** 
 * **Metering**: Per-Membership Feature State.
**/
export class MeteringMembershipState extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastMeasurementTime" })
  lastMeasurementTime?: string;

  @Metadata({ data: "json, name=preciseLastMeasuredClusterVcpuCapacity" })
  preciseLastMeasuredClusterVcpuCapacity?: number;
}
