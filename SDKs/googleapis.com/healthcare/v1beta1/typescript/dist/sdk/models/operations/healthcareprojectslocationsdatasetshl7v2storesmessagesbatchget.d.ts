import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED",
    RawOnly = "RAW_ONLY",
    ParsedOnly = "PARSED_ONLY",
    Full = "FULL",
    SchematizedOnly = "SCHEMATIZED_ONLY",
    Basic = "BASIC"
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetViewEnum;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetQueryParams;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesBatchGetResponse extends SpeakeasyBase {
    batchGetMessagesResponse?: shared.BatchGetMessagesResponse;
    contentType: string;
    statusCode: number;
}
