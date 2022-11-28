import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegistrationsCitationReadPathParams extends SpeakeasyBase {
    citationId: string;
    registrationId: string;
}
export declare class RegistrationsCitationReadRequest extends SpeakeasyBase {
    pathParams: RegistrationsCitationReadPathParams;
}
export declare class RegistrationsCitationReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
