import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdServiceAccountUserPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdServiceAccountUserRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdServiceAccountUserPathParams;
}
export declare class GetRealmClientsIdServiceAccountUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRepresentation?: shared.UserRepresentation;
}
