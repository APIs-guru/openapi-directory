import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZonesListPathParams extends SpeakeasyBase {
    project: string;
}
export declare class DnsManagedZonesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dnsName?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsManagedZonesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZonesListSecurity extends SpeakeasyBase {
    option1?: DnsManagedZonesListSecurityOption1;
    option2?: DnsManagedZonesListSecurityOption2;
    option3?: DnsManagedZonesListSecurityOption3;
    option4?: DnsManagedZonesListSecurityOption4;
}
export declare class DnsManagedZonesListRequest extends SpeakeasyBase {
    pathParams: DnsManagedZonesListPathParams;
    queryParams: DnsManagedZonesListQueryParams;
    security: DnsManagedZonesListSecurity;
}
export declare class DnsManagedZonesListResponse extends SpeakeasyBase {
    contentType: string;
    managedZonesListResponse?: shared.ManagedZonesListResponse;
    statusCode: number;
}
