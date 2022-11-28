import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";



// OperatingSystemVersion
/** 
 * Contains information about a particular version of an operating system that can be targeted by ads.
**/
export class OperatingSystemVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=majorVersion" })
  majorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=minorVersion" })
  minorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystem" })
  operatingSystem?: OperatingSystem;
}
