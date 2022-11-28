import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportUserHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetReportUserRequest extends SpeakeasyBase {
    headers: GetReportUserHeaders;
}
export declare class GetReportUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
