import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";


export class PatientAuthInitRequestQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMode" })
  authMode?: AuthenticationModeEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @Metadata({ data: "json, name=requester" })
  requester: PatientAuthRequester;
}


export class PatientAuthInitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query: PatientAuthInitRequestQuery;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
