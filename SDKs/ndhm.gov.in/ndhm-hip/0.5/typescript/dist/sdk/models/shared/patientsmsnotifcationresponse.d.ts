import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";
export declare enum PatientSmsNotifcationResponseStatusEnum {
    Acknowledged = "ACKNOWLEDGED",
    Errored = "ERRORED"
}
export declare class PatientSmsNotifcationResponse extends SpeakeasyBase {
    error?: Error;
    requestId: string;
    resp: RequestReference;
    status?: PatientSmsNotifcationResponseStatusEnum;
    timestamp: Date;
}
