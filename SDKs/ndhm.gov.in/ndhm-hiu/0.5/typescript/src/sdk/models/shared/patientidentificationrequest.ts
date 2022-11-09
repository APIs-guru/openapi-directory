import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatientIdentificationRequestQueryPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}

export enum PatientIdentificationRequestQueryRequesterTypeEnum {
    Hiu = "HIU"
,    Hip = "HIP"
}


export class PatientIdentificationRequestQueryRequester extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: PatientIdentificationRequestQueryRequesterTypeEnum;
}


export class PatientIdentificationRequestQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=patient" })
  patient: PatientIdentificationRequestQueryPatient;

  @Metadata({ data: "json, name=requester" })
  requester: PatientIdentificationRequestQueryRequester;
}


export class PatientIdentificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=query" })
  query: PatientIdentificationRequestQuery;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
