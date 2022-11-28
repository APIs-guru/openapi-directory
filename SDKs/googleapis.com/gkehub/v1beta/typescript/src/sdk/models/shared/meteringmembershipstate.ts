import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeteringMembershipState
/** 
 * **Metering**: Per-Membership Feature State.
**/
export class MeteringMembershipState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastMeasurementTime" })
  lastMeasurementTime?: string;

  @SpeakeasyMetadata({ data: "json, name=preciseLastMeasuredClusterVcpuCapacity" })
  preciseLastMeasuredClusterVcpuCapacity?: number;
}
