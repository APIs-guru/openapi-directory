import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsLogsListPathParams extends SpeakeasyBase {
    registrationId: string;
}
export declare class RegistrationsLogsListRequest extends SpeakeasyBase {
    pathParams: RegistrationsLogsListPathParams;
}
export declare class RegistrationsLogsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
