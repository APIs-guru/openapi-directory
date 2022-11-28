import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Volume
/** 
 * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;
}
