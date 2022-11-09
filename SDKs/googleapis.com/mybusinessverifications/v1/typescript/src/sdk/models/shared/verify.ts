import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Verify
/** 
 * Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
**/
export class Verify extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasPendingVerification" })
  hasPendingVerification?: boolean;
}
