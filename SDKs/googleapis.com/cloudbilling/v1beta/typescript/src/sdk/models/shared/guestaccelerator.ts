import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GuestAccelerator
/** 
 * Specification of a set of guest accelerators attached to a machine.
**/
export class GuestAccelerator extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;
}
