import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserSessionRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients" })
  clients?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=lastAccess" })
  lastAccess?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
