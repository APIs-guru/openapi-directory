import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatientIdentificationRequestQueryPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

export enum PatientIdentificationRequestQueryRequesterTypeEnum {
    Hiu = "HIU",
    Hip = "HIP"
}


export class PatientIdentificationRequestQueryRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PatientIdentificationRequestQueryRequesterTypeEnum;
}


export class PatientIdentificationRequestQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: PatientIdentificationRequestQueryPatient;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester: PatientIdentificationRequestQueryRequester;
}


export class PatientIdentificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query" })
  query: PatientIdentificationRequestQuery;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
