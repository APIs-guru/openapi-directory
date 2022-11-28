import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientIdentificationRequestQueryPatient extends SpeakeasyBase {
    id: string;
}
export declare enum PatientIdentificationRequestQueryRequesterTypeEnum {
    Hiu = "HIU",
    Hip = "HIP"
}
export declare class PatientIdentificationRequestQueryRequester extends SpeakeasyBase {
    id: string;
    type: PatientIdentificationRequestQueryRequesterTypeEnum;
}
export declare class PatientIdentificationRequestQuery extends SpeakeasyBase {
    patient: PatientIdentificationRequestQueryPatient;
    requester: PatientIdentificationRequestQueryRequester;
}
export declare class PatientIdentificationRequest extends SpeakeasyBase {
    query: PatientIdentificationRequestQuery;
    requestId: string;
    timestamp: Date;
}
