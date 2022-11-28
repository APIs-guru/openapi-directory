import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsWaitersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RuntimeconfigProjectsConfigsWaitersListQueryParams extends SpeakeasyBase {
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
export declare class RuntimeconfigProjectsConfigsWaitersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsWaitersListSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsWaitersListSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsWaitersListSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsWaitersListRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsWaitersListPathParams;
    queryParams: RuntimeconfigProjectsConfigsWaitersListQueryParams;
    security: RuntimeconfigProjectsConfigsWaitersListSecurity;
}
export declare class RuntimeconfigProjectsConfigsWaitersListResponse extends SpeakeasyBase {
    contentType: string;
    listWaitersResponse?: shared.ListWaitersResponse;
    statusCode: number;
}
