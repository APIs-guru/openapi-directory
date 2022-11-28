import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";



export class AccessTokenValidity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry: Date;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester: PatientAuthRequester;
}
