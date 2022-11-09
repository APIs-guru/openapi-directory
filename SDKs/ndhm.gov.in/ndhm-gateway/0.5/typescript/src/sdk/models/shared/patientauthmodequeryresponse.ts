import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class PatientAuthModeQueryResponseAuth extends SpeakeasyBase {
  @Metadata({ data: "json, name=modes" })
  modes: AuthenticationModeEnum[];

  @Metadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;
}


export class PatientAuthModeQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth" })
  auth?: PatientAuthModeQueryResponseAuth;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
