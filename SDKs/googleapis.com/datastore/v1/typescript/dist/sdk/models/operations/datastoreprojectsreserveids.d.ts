import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsReserveIdsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsReserveIdsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatastoreProjectsReserveIdsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsReserveIdsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsReserveIdsSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsReserveIdsSecurityOption1;
    option2?: DatastoreProjectsReserveIdsSecurityOption2;
}
export declare class DatastoreProjectsReserveIdsRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsReserveIdsPathParams;
    queryParams: DatastoreProjectsReserveIdsQueryParams;
    request?: shared.ReserveIdsRequest;
    security: DatastoreProjectsReserveIdsSecurity;
}
export declare class DatastoreProjectsReserveIdsResponse extends SpeakeasyBase {
    contentType: string;
    reserveIdsResponse?: Map<string, any>;
    statusCode: number;
}
