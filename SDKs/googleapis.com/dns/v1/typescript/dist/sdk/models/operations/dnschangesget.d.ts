import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsChangesGetPathParams extends SpeakeasyBase {
    changeId: string;
    managedZone: string;
    project: string;
}
export declare class DnsChangesGetQueryParams extends SpeakeasyBase {
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
export declare class DnsChangesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesGetSecurity extends SpeakeasyBase {
    option1?: DnsChangesGetSecurityOption1;
    option2?: DnsChangesGetSecurityOption2;
    option3?: DnsChangesGetSecurityOption3;
    option4?: DnsChangesGetSecurityOption4;
}
export declare class DnsChangesGetRequest extends SpeakeasyBase {
    pathParams: DnsChangesGetPathParams;
    queryParams: DnsChangesGetQueryParams;
    security: DnsChangesGetSecurity;
}
export declare class DnsChangesGetResponse extends SpeakeasyBase {
    change?: shared.Change;
    contentType: string;
    statusCode: number;
}
