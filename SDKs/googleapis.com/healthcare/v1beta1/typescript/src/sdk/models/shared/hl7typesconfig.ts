import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Type } from "./type";
import { VersionSource } from "./versionsource";


// Hl7TypesConfig
/** 
 * Root config for HL7v2 datatype definitions for a specific HL7v2 version.
**/
export class Hl7TypesConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=type", elemType: shared.Type })
  type?: Type[];

  @Metadata({ data: "json, name=version", elemType: shared.VersionSource })
  version?: VersionSource[];
}
