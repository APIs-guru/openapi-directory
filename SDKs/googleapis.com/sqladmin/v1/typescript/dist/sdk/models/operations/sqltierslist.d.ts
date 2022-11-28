import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlTiersListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class SqlTiersListQueryParams extends SpeakeasyBase {
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
export declare class SqlTiersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlTiersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlTiersListSecurity extends SpeakeasyBase {
    option1?: SqlTiersListSecurityOption1;
    option2?: SqlTiersListSecurityOption2;
}
export declare class SqlTiersListRequest extends SpeakeasyBase {
    pathParams: SqlTiersListPathParams;
    queryParams: SqlTiersListQueryParams;
    security: SqlTiersListSecurity;
}
export declare class SqlTiersListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tiersListResponse?: shared.TiersListResponse;
}
