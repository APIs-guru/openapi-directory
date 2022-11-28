import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmPartialExportPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmPartialExportQueryParams extends SpeakeasyBase {
    exportClients?: boolean;
    exportGroupsAndRoles?: boolean;
}
export declare class PostRealmPartialExportRequest extends SpeakeasyBase {
    pathParams: PostRealmPartialExportPathParams;
    queryParams: PostRealmPartialExportQueryParams;
}
export declare class PostRealmPartialExportResponse extends SpeakeasyBase {
    contentType: string;
    realmRepresentation?: shared.RealmRepresentation;
    statusCode: number;
}
