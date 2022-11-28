import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";



export class PatientAuthInitRequestQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMode" })
  authMode?: AuthenticationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester: PatientAuthRequester;
}


export class PatientAuthInitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query: PatientAuthInitRequestQuery;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
