import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesDnsRecordSetsUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesDnsRecordSetsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsRecordSetsUpdateSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption1;
    option2?: ServicenetworkingServicesDnsRecordSetsUpdateSecurityOption2;
}
export declare class ServicenetworkingServicesDnsRecordSetsUpdateRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesDnsRecordSetsUpdatePathParams;
    queryParams: ServicenetworkingServicesDnsRecordSetsUpdateQueryParams;
    request?: shared.UpdateDnsRecordSetRequest;
    security: ServicenetworkingServicesDnsRecordSetsUpdateSecurity;
}
export declare class ServicenetworkingServicesDnsRecordSetsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
