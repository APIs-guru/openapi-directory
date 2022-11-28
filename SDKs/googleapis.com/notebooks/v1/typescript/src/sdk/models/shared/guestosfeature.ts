import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GuestOsFeature
/** 
 * Guest OS features for boot disk.
**/
export class GuestOsFeature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
