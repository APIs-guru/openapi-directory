import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Job
/** 
 * A job creating reports of a specific type.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reportTypeId" })
  reportTypeId?: string;

  @Metadata({ data: "json, name=systemManaged" })
  systemManaged?: boolean;
}
