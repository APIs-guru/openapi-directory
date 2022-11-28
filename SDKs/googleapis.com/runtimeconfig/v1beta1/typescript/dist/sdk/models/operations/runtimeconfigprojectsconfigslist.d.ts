import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RuntimeconfigProjectsConfigsListQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsListSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsListSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsListSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsListRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsListPathParams;
    queryParams: RuntimeconfigProjectsConfigsListQueryParams;
    security: RuntimeconfigProjectsConfigsListSecurity;
}
export declare class RuntimeconfigProjectsConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    listConfigsResponse?: shared.ListConfigsResponse;
    statusCode: number;
}
