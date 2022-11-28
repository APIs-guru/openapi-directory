import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsFilesReadPathParams extends SpeakeasyBase {
    path: string;
    provider: string;
    registrationId: string;
}
export declare class RegistrationsFilesReadRequest extends SpeakeasyBase {
    pathParams: RegistrationsFilesReadPathParams;
}
export declare class RegistrationsFilesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
