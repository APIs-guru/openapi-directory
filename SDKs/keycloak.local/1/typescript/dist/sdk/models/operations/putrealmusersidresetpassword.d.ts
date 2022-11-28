import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmUsersIdResetPasswordPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmUsersIdResetPasswordRequest extends SpeakeasyBase {
    pathParams: PutRealmUsersIdResetPasswordPathParams;
    request: shared.CredentialRepresentation;
}
export declare class PutRealmUsersIdResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
