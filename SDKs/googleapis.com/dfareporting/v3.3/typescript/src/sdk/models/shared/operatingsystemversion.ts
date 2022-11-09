import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystem } from "./operatingsystem";


// OperatingSystemVersion
/** 
 * Contains information about a particular version of an operating system that can be targeted by ads.
**/
export class OperatingSystemVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @Metadata({ data: "json, name=minorVersion" })
  minorVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operatingSystem" })
  operatingSystem?: OperatingSystem;
}
