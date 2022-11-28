import { SpeakeasyBase } from "../../../internal/utils";
export declare class LogoutResponseResponse extends SpeakeasyBase {
    user: string;
}
export declare enum LogoutResponseStatusEnum {
    Success = "success"
}
export declare class LogoutResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: LogoutResponseResponse;
    status: LogoutResponseStatusEnum;
}
