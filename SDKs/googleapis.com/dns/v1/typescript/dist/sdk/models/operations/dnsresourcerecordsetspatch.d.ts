import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResourceRecordSetsPatchPathParams extends SpeakeasyBase {
    managedZone: string;
    name: string;
    project: string;
    type: string;
}
export declare class DnsResourceRecordSetsPatchQueryParams extends SpeakeasyBase {
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
export declare class DnsResourceRecordSetsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsPatchSecurity extends SpeakeasyBase {
    option1?: DnsResourceRecordSetsPatchSecurityOption1;
    option2?: DnsResourceRecordSetsPatchSecurityOption2;
}
export declare class DnsResourceRecordSetsPatchRequest extends SpeakeasyBase {
    pathParams: DnsResourceRecordSetsPatchPathParams;
    queryParams: DnsResourceRecordSetsPatchQueryParams;
    request?: shared.ResourceRecordSet;
    security: DnsResourceRecordSetsPatchSecurity;
}
export declare class DnsResourceRecordSetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    resourceRecordSet?: shared.ResourceRecordSet;
    statusCode: number;
}
