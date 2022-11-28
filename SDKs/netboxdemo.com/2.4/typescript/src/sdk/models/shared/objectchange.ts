import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";



export class ObjectChange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: number;

  @SpeakeasyMetadata({ data: "json, name=changed_object" })
  changedObject?: string;

  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=object_data" })
  objectData?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: NestedUser;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}
