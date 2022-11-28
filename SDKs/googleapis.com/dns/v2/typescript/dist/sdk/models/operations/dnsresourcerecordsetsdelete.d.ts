import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsResourceRecordSetsDeletePathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    name: string;
    project: string;
    type: string;
}
export declare class DnsResourceRecordSetsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DnsResourceRecordSetsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsResourceRecordSetsDeleteSecurity extends SpeakeasyBase {
    option1?: DnsResourceRecordSetsDeleteSecurityOption1;
    option2?: DnsResourceRecordSetsDeleteSecurityOption2;
}
export declare class DnsResourceRecordSetsDeleteRequest extends SpeakeasyBase {
    pathParams: DnsResourceRecordSetsDeletePathParams;
    queryParams: DnsResourceRecordSetsDeleteQueryParams;
    security: DnsResourceRecordSetsDeleteSecurity;
}
export declare class DnsResourceRecordSetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
