import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasemlProjectsModelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasemlProjectsModelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasemlProjectsModelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasemlProjectsModelsListRequest extends SpeakeasyBase {
    pathParams: FirebasemlProjectsModelsListPathParams;
    queryParams: FirebasemlProjectsModelsListQueryParams;
    security: FirebasemlProjectsModelsListSecurity;
}
export declare class FirebasemlProjectsModelsListResponse extends SpeakeasyBase {
    contentType: string;
    listModelsResponse?: shared.ListModelsResponse;
    statusCode: number;
}
