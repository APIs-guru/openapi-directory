import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTraceSinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudtraceProjectsTraceSinksListQueryParams extends SpeakeasyBase {
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
export declare class CloudtraceProjectsTraceSinksListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTraceSinksListSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTraceSinksListSecurityOption1;
    option2?: CloudtraceProjectsTraceSinksListSecurityOption2;
}
export declare class CloudtraceProjectsTraceSinksListRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTraceSinksListPathParams;
    queryParams: CloudtraceProjectsTraceSinksListQueryParams;
    security: CloudtraceProjectsTraceSinksListSecurity;
}
export declare class CloudtraceProjectsTraceSinksListResponse extends SpeakeasyBase {
    contentType: string;
    listTraceSinksResponse?: shared.ListTraceSinksResponse;
    statusCode: number;
}
