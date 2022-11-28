import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseCrmEventbusProtoSuspensionExpiration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireAfterMs" })
  expireAfterMs?: number;

  @SpeakeasyMetadata({ data: "json, name=liftWhenExpired" })
  liftWhenExpired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remindAfterMs" })
  remindAfterMs?: number;
}
