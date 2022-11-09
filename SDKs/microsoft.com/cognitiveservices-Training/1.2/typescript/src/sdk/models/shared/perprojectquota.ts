import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Quota } from "./quota";
import { Quota } from "./quota";
import { Quota } from "./quota";


// PerProjectQuota
/** 
 * Represents a set of quotas for a given project
**/
export class PerProjectQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=Images" })
  images?: Quota;

  @Metadata({ data: "json, name=Iterations" })
  iterations?: Quota;

  @Metadata({ data: "json, name=ProjectId" })
  projectId?: string;

  @Metadata({ data: "json, name=Tags" })
  tags?: Quota;
}
