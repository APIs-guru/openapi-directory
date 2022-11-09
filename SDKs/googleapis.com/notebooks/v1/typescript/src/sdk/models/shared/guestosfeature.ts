import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GuestOsFeature
/** 
 * Guest OS features for boot disk.
**/
export class GuestOsFeature extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;
}
