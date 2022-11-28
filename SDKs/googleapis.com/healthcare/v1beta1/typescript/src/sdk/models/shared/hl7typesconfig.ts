import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Type } from "./type";
import { VersionSource } from "./versionsource";



// Hl7TypesConfig
/** 
 * Root config for HL7v2 datatype definitions for a specific HL7v2 version.
**/
export class Hl7TypesConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type", elemType: Type })
  type?: Type[];

  @SpeakeasyMetadata({ data: "json, name=version", elemType: VersionSource })
  version?: VersionSource[];
}
