import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedUser } from "./nesteduser";


export class UserActionAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class UserAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: UserActionAction;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=time" })
  time?: Date;

  @Metadata({ data: "json, name=user" })
  user: NestedUser;
}
