import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InMemoryUser } from "./inmemoryuser";


// InMemoryAuthModuleConfig
/** 
 * Settings to authenticate users using the in memory user store
**/
export class InMemoryAuthModuleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=desc" })
  desc: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sessionMaxAge" })
  sessionMaxAge: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=users", elemType: shared.InMemoryUser })
  users: InMemoryUser[];
}
