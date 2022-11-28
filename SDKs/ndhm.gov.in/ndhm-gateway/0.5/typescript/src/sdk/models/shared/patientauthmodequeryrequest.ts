import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";


export enum PatientAuthModeQueryRequestQueryRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}


export class PatientAuthModeQueryRequestQueryRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PatientAuthModeQueryRequestQueryRequesterTypeEnum;
}


export class PatientAuthModeQueryRequestQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester: PatientAuthModeQueryRequestQueryRequester;
}


export class PatientAuthModeQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query: PatientAuthModeQueryRequestQuery;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
