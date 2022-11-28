import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";


export enum PatientAuthInitRequestQueryRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}


// PatientAuthInitRequestQueryRequester
/** 
 * identification of requester
**/
export class PatientAuthInitRequestQueryRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PatientAuthInitRequestQueryRequesterTypeEnum;
}


export class PatientAuthInitRequestQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMode" })
  authMode?: AuthenticationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester: PatientAuthInitRequestQueryRequester;
}


export class PatientAuthInitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query: PatientAuthInitRequestQuery;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
