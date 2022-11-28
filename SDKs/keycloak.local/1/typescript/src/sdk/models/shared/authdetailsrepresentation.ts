import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthDetailsRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=realmId" })
  realmId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
