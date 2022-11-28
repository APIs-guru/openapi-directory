import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ShareProfileAcknowledgementStatusEnum {
    Success = "SUCCESS",
    Failure = "FAILURE"
}
export declare class ShareProfileAcknowledgement extends SpeakeasyBase {
    healthId: string;
    status: ShareProfileAcknowledgementStatusEnum;
}
