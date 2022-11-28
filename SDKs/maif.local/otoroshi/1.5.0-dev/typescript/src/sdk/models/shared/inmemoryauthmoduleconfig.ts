import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InMemoryUser } from "./inmemoryuser";



// InMemoryAuthModuleConfig
/** 
 * Settings to authenticate users using the in memory user store
**/
export class InMemoryAuthModuleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sessionMaxAge" })
  sessionMaxAge: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: InMemoryUser })
  users: InMemoryUser[];
}
