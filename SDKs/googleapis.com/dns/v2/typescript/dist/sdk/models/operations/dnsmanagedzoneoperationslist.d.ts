import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DnsManagedZoneOperationsListPathParams extends SpeakeasyBase {
    location: string;
    managedZone: string;
    project: string;
}
export declare enum DnsManagedZoneOperationsListSortByEnum {
    StartTime = "START_TIME",
    Id = "ID"
}
export declare class DnsManagedZoneOperationsListQueryParams extends SpeakeasyBase {
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
    sortBy?: DnsManagedZoneOperationsListSortByEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DnsManagedZoneOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DnsManagedZoneOperationsListSecurity extends SpeakeasyBase {
    option1?: DnsManagedZoneOperationsListSecurityOption1;
    option2?: DnsManagedZoneOperationsListSecurityOption2;
    option3?: DnsManagedZoneOperationsListSecurityOption3;
    option4?: DnsManagedZoneOperationsListSecurityOption4;
}
export declare class DnsManagedZoneOperationsListRequest extends SpeakeasyBase {
    pathParams: DnsManagedZoneOperationsListPathParams;
    queryParams: DnsManagedZoneOperationsListQueryParams;
    security: DnsManagedZoneOperationsListSecurity;
}
export declare class DnsManagedZoneOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    managedZoneOperationsListResponse?: shared.ManagedZoneOperationsListResponse;
    statusCode: number;
}
