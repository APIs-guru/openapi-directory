import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutAdministrationUserHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PutAdministrationUserRequest extends SpeakeasyBase {
    headers: PutAdministrationUserHeaders;
}
export declare class PutAdministrationUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
