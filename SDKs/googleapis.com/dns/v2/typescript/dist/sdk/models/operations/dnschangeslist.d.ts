import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsChangesListPathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare enum DnsChangesListSortByEnum {
    ChangeSequence = "CHANGE_SEQUENCE"
}
export declare class DnsChangesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortBy?: DnsChangesListSortByEnum;
    sortOrder?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsChangesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsChangesListSecurity extends SpeakeasyBase {
    option1?: DnsChangesListSecurityOption1;
    option2?: DnsChangesListSecurityOption2;
    option3?: DnsChangesListSecurityOption3;
    option4?: DnsChangesListSecurityOption4;
}
export declare class DnsChangesListRequest extends SpeakeasyBase {
    pathParams: DnsChangesListPathParams;
    queryParams: DnsChangesListQueryParams;
    security: DnsChangesListSecurity;
}
export declare class DnsChangesListResponse extends SpeakeasyBase {
    changesListResponse?: shared.ChangesListResponse;
    contentType: string;
    statusCode: number;
}
