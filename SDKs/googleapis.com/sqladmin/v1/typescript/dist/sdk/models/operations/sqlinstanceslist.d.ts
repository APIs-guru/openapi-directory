import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class SqlInstancesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SqlInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesListSecurity extends SpeakeasyBase {
    option1?: SqlInstancesListSecurityOption1;
    option2?: SqlInstancesListSecurityOption2;
}
export declare class SqlInstancesListRequest extends SpeakeasyBase {
    pathParams: SqlInstancesListPathParams;
    queryParams: SqlInstancesListQueryParams;
    security: SqlInstancesListSecurity;
}
export declare class SqlInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    instancesListResponse?: shared.InstancesListResponse;
    statusCode: number;
}
