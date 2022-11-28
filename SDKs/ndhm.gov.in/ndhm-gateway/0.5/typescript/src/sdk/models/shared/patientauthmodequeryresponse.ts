import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { Error } from "./error";
import { RequestReference } from "./requestreference";



export class PatientAuthModeQueryResponseAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modes" })
  modes: AuthenticationModeEnum[];

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;
}


export class PatientAuthModeQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth" })
  auth?: PatientAuthModeQueryResponseAuth;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
