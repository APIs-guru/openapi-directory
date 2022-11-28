import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GuestAccelerator
/** 
 * Specification of a set of guest accelerators attached to a machine.
**/
export class GuestAccelerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;
}
