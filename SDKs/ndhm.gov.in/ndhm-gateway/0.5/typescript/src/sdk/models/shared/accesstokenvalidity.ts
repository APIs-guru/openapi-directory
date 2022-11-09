import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";


export class AccessTokenValidity extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiry" })
  expiry: Date;

  @Metadata({ data: "json, name=limit" })
  limit: number;

  @Metadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @Metadata({ data: "json, name=requester" })
  requester: PatientAuthRequester;
}
