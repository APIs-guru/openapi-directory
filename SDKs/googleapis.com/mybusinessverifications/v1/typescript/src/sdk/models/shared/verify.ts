import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Verify
/** 
 * Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
**/
export class Verify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasPendingVerification" })
  hasPendingVerification?: boolean;
}
