import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsChangesCreatePathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare class DnsChangesCreateQueryParams extends SpeakeasyBase {
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
export declare class DnsChangesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesCreateSecurity extends SpeakeasyBase {
    option1?: DnsChangesCreateSecurityOption1;
    option2?: DnsChangesCreateSecurityOption2;
}
export declare class DnsChangesCreateRequest extends SpeakeasyBase {
    pathParams: DnsChangesCreatePathParams;
    queryParams: DnsChangesCreateQueryParams;
    request?: shared.Change;
    security: DnsChangesCreateSecurity;
}
export declare class DnsChangesCreateResponse extends SpeakeasyBase {
    change?: shared.Change;
    contentType: string;
    statusCode: number;
}
