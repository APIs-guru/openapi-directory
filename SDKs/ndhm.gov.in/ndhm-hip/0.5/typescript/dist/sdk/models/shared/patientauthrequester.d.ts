import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatientAuthRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}
/**
 * identification of requester
**/
export declare class PatientAuthRequester extends SpeakeasyBase {
    id: string;
    type: PatientAuthRequesterTypeEnum;
}
