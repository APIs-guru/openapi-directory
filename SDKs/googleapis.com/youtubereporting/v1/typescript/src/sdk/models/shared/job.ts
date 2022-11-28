import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Job
/** 
 * A job creating reports of a specific type.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reportTypeId" })
  reportTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=systemManaged" })
  systemManaged?: boolean;
}
