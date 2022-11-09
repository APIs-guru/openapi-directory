import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Interval } from "./interval";


// Release
/** 
 * A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
**/
export class Release extends SpeakeasyBase {
  @Metadata({ data: "json, name=fraction" })
  fraction?: number;

  @Metadata({ data: "json, name=fractionGroup" })
  fractionGroup?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serving" })
  serving?: Interval;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
