import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthMeta } from "./authmeta";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";



export class PatientAuthInitResponseAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: AuthMeta;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode: AuthenticationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class PatientAuthInitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: PatientAuthInitResponseAuth;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
