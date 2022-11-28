import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";



// Release
/** 
 * A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
**/
export class Release extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fraction" })
  fraction?: number;

  @SpeakeasyMetadata({ data: "json, name=fractionGroup" })
  fractionGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serving" })
  serving?: Interval;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
