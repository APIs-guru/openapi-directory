import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";


// Location
/** 
 * An occurrence of a particular package installation found within a system's filesystem. e.g. glibc was found in /var/lib/dpkg/status
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=version" })
  version?: Version;
}
