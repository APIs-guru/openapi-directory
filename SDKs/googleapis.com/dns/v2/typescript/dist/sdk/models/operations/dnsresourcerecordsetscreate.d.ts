import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResourceRecordSetsCreatePathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare class DnsResourceRecordSetsCreateQueryParams extends SpeakeasyBase {
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
export declare class DnsResourceRecordSetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsCreateSecurity extends SpeakeasyBase {
    option1?: DnsResourceRecordSetsCreateSecurityOption1;
    option2?: DnsResourceRecordSetsCreateSecurityOption2;
}
export declare class DnsResourceRecordSetsCreateRequest extends SpeakeasyBase {
    pathParams: DnsResourceRecordSetsCreatePathParams;
    queryParams: DnsResourceRecordSetsCreateQueryParams;
    request?: shared.ResourceRecordSet;
    security: DnsResourceRecordSetsCreateSecurity;
}
export declare class DnsResourceRecordSetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    resourceRecordSet?: shared.ResourceRecordSet;
    statusCode: number;
}
