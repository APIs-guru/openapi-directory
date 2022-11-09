import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthMeta } from "./authmeta";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class PatientAuthInitResponseAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: AuthMeta;

  @Metadata({ data: "json, name=mode" })
  mode: AuthenticationModeEnum;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class PatientAuthInitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: PatientAuthInitResponseAuth;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
