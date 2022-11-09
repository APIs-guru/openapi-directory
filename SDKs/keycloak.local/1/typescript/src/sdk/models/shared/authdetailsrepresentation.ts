import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthDetailsRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=realmId" })
  realmId?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
