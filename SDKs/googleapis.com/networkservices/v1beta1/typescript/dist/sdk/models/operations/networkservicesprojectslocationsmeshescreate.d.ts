import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NetworkservicesProjectsLocationsMeshesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NetworkservicesProjectsLocationsMeshesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    meshId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NetworkservicesProjectsLocationsMeshesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NetworkservicesProjectsLocationsMeshesCreateRequest extends SpeakeasyBase {
    pathParams: NetworkservicesProjectsLocationsMeshesCreatePathParams;
    queryParams: NetworkservicesProjectsLocationsMeshesCreateQueryParams;
    request?: shared.MeshInput;
    security: NetworkservicesProjectsLocationsMeshesCreateSecurity;
}
export declare class NetworkservicesProjectsLocationsMeshesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
