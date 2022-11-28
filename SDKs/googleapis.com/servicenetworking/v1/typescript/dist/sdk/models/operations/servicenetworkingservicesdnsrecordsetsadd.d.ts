import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesDnsRecordSetsAddPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesDnsRecordSetsAddQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesDnsRecordSetsAddSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsRecordSetsAddSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsRecordSetsAddSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesDnsRecordSetsAddSecurityOption1;
    option2?: ServicenetworkingServicesDnsRecordSetsAddSecurityOption2;
}
export declare class ServicenetworkingServicesDnsRecordSetsAddRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesDnsRecordSetsAddPathParams;
    queryParams: ServicenetworkingServicesDnsRecordSetsAddQueryParams;
    request?: shared.AddDnsRecordSetRequest;
    security: ServicenetworkingServicesDnsRecordSetsAddSecurity;
}
export declare class ServicenetworkingServicesDnsRecordSetsAddResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
