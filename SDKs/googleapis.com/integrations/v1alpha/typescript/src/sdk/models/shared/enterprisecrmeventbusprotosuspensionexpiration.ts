import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseCrmEventbusProtoSuspensionExpiration extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireAfterMs" })
  expireAfterMs?: number;

  @Metadata({ data: "json, name=liftWhenExpired" })
  liftWhenExpired?: boolean;

  @Metadata({ data: "json, name=remindAfterMs" })
  remindAfterMs?: number;
}
