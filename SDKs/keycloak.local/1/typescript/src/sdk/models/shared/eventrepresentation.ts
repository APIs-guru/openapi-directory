import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=realmId" })
  realmId?: string;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=time" })
  time?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
