import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TargetProject
/** 
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
**/
export class TargetProject extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
