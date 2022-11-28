import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicaStatus
/** 
 * The current status of a Replica.
**/
export class ReplicaStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  details?: string;

  @SpeakeasyMetadata()
  state?: string;

  @SpeakeasyMetadata()
  templateVersion?: string;

  @SpeakeasyMetadata()
  vmLink?: string;

  @SpeakeasyMetadata()
  vmStartTime?: string;
}
