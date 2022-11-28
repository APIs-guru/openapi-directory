import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResourceRecordSetsListPathParams extends SpeakeasyBase {
    managedZone: string;
    project: string;
}
export declare class DnsResourceRecordSetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    name?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsResourceRecordSetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsListSecurity extends SpeakeasyBase {
    option1?: DnsResourceRecordSetsListSecurityOption1;
    option2?: DnsResourceRecordSetsListSecurityOption2;
    option3?: DnsResourceRecordSetsListSecurityOption3;
    option4?: DnsResourceRecordSetsListSecurityOption4;
}
export declare class DnsResourceRecordSetsListRequest extends SpeakeasyBase {
    pathParams: DnsResourceRecordSetsListPathParams;
    queryParams: DnsResourceRecordSetsListQueryParams;
    security: DnsResourceRecordSetsListSecurity;
}
export declare class DnsResourceRecordSetsListResponse extends SpeakeasyBase {
    contentType: string;
    resourceRecordSetsListResponse?: shared.ResourceRecordSetsListResponse;
    statusCode: number;
}
