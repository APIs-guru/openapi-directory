import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsProjectsGetPathParams extends SpeakeasyBase {
    location: string;
    project: string;
}
export declare class DnsProjectsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clientOperationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsProjectsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsProjectsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsProjectsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsProjectsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsProjectsGetSecurity extends SpeakeasyBase {
    option1?: DnsProjectsGetSecurityOption1;
    option2?: DnsProjectsGetSecurityOption2;
    option3?: DnsProjectsGetSecurityOption3;
    option4?: DnsProjectsGetSecurityOption4;
}
export declare class DnsProjectsGetRequest extends SpeakeasyBase {
    pathParams: DnsProjectsGetPathParams;
    queryParams: DnsProjectsGetQueryParams;
    security: DnsProjectsGetSecurity;
}
export declare class DnsProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
