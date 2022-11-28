import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED",
    RawOnly = "RAW_ONLY",
    ParsedOnly = "PARSED_ONLY",
    Full = "FULL",
    SchematizedOnly = "SCHEMATIZED_ONLY",
    Basic = "BASIC"
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListViewEnum;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListQueryParams;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    listMessagesResponse?: shared.ListMessagesResponse;
    statusCode: number;
}
