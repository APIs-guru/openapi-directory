import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";

export enum PatientAuthModeQueryRequestQueryRequesterTypeEnum {
    Hip = "HIP"
,    Hiu = "HIU"
}


export class PatientAuthModeQueryRequestQueryRequester extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: PatientAuthModeQueryRequestQueryRequesterTypeEnum;
}


export class PatientAuthModeQueryRequestQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=purpose" })
  purpose: PatientAuthPurposeEnum;

  @Metadata({ data: "json, name=requester" })
  requester: PatientAuthModeQueryRequestQueryRequester;
}


export class PatientAuthModeQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query: PatientAuthModeQueryRequestQuery;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
