import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsMeshesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsMeshesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsMeshesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsMeshesListRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsMeshesListPathParams;
    queryParams: NetworkservicesProjectsLocationsMeshesListQueryParams;
    security: NetworkservicesProjectsLocationsMeshesListSecurity;
}
export declare class NetworkservicesProjectsLocationsMeshesListResponse extends SpeakeasyBase {
    contentType: string;
    listMeshesResponse?: shared.ListMeshesResponse;
    statusCode: number;
}
