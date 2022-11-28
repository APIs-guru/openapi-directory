import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsFilesListPathParams extends SpeakeasyBase {
    provider: string;
    registrationId: string;
}
export declare class RegistrationsFilesListRequest extends SpeakeasyBase {
    pathParams: RegistrationsFilesListPathParams;
}
export declare class RegistrationsFilesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
