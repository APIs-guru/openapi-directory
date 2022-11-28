import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserSessionRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clients" })
  clients?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=lastAccess" })
  lastAccess?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
