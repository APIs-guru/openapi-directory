import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareVersionOut
/** 
 * The software version.
**/
export class SoftwareVersionOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=softwareNameAndVersion" })
  softwareNameAndVersion?: string;

  @Metadata({ data: "json, name=softwareVersion" })
  softwareVersion?: number[];
}
