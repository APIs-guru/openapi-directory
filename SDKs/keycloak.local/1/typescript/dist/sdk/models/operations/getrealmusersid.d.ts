import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdPathParams;
}
export declare class GetRealmUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRepresentation?: shared.UserRepresentation;
}
