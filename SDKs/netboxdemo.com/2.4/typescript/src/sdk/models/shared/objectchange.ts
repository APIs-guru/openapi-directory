import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedUser } from "./nesteduser";


export class ObjectChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: number;

  @Metadata({ data: "json, name=changed_object" })
  changedObject?: string;

  @Metadata({ data: "json, name=content_type" })
  contentType?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=object_data" })
  objectData?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=user" })
  user?: NestedUser;

  @Metadata({ data: "json, name=user_name" })
  userName?: string;
}
