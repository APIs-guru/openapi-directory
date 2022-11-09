import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Volume
/** 
 * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;
}
