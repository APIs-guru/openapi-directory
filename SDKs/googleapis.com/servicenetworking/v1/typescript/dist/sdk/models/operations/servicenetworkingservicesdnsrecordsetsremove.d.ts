import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicenetworkingServicesDnsRecordSetsRemovePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicenetworkingServicesDnsRecordSetsRemoveQueryParams extends SpeakeasyBase {
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
export declare class ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicenetworkingServicesDnsRecordSetsRemoveSecurity extends SpeakeasyBase {
    option1?: ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption1;
    option2?: ServicenetworkingServicesDnsRecordSetsRemoveSecurityOption2;
}
export declare class ServicenetworkingServicesDnsRecordSetsRemoveRequest extends SpeakeasyBase {
    pathParams: ServicenetworkingServicesDnsRecordSetsRemovePathParams;
    queryParams: ServicenetworkingServicesDnsRecordSetsRemoveQueryParams;
    request?: shared.RemoveDnsRecordSetRequest;
    security: ServicenetworkingServicesDnsRecordSetsRemoveSecurity;
}
export declare class ServicenetworkingServicesDnsRecordSetsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
