import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResourceRecordSetsGetPathParams extends SpeakeasyBase {
    managedZone: string;
    name: string;
    project: string;
    type: string;
}
export declare class DnsResourceRecordSetsGetQueryParams extends SpeakeasyBase {
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
export declare class DnsResourceRecordSetsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsGetSecurity extends SpeakeasyBase {
    option1?: DnsResourceRecordSetsGetSecurityOption1;
    option2?: DnsResourceRecordSetsGetSecurityOption2;
    option3?: DnsResourceRecordSetsGetSecurityOption3;
    option4?: DnsResourceRecordSetsGetSecurityOption4;
}
export declare class DnsResourceRecordSetsGetRequest extends SpeakeasyBase {
    pathParams: DnsResourceRecordSetsGetPathParams;
    queryParams: DnsResourceRecordSetsGetQueryParams;
    security: DnsResourceRecordSetsGetSecurity;
}
export declare class DnsResourceRecordSetsGetResponse extends SpeakeasyBase {
    contentType: string;
    resourceRecordSet?: shared.ResourceRecordSet;
    statusCode: number;
}
