import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";



// Location
/** 
 * An occurrence of a particular package installation found within a system's filesystem. e.g. glibc was found in /var/lib/dpkg/status
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Version;
}
