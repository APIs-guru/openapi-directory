import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareVersionOut
/** 
 * The software version.
**/
export class SoftwareVersionOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=softwareNameAndVersion" })
  softwareNameAndVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=softwareVersion" })
  softwareVersion?: number[];
}
