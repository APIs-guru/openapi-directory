import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Quota } from "./quota";



// PerProjectQuota
/** 
 * Represents a set of quotas for a given project
**/
export class PerProjectQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images" })
  images?: Quota;

  @SpeakeasyMetadata({ data: "json, name=Iterations" })
  iterations?: Quota;

  @SpeakeasyMetadata({ data: "json, name=ProjectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Quota;
}
