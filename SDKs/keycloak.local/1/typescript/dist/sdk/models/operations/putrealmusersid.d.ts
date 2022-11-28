import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRealmUsersIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PutRealmUsersIdRequest extends SpeakeasyBase {
    pathParams: PutRealmUsersIdPathParams;
    request: shared.UserRepresentation;
}
export declare class PutRealmUsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
