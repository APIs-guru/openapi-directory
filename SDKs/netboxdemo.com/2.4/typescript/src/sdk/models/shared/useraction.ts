import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";



export class UserActionAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class UserAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: UserActionAction;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: NestedUser;
}
