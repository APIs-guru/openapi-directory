import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=realmId" })
  realmId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
