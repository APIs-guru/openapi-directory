import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TargetProject
/** 
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
**/
export class TargetProject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// TargetProjectInput
/** 
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
**/
export class TargetProjectInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
