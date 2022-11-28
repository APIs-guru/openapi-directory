import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum HealthcareProjectsLocationsDatasetsOperationsGetViewEnum {
    MessageViewUnspecified = "MESSAGE_VIEW_UNSPECIFIED",
    RawOnly = "RAW_ONLY",
    ParsedOnly = "PARSED_ONLY",
    Full = "FULL",
    SchematizedOnly = "SCHEMATIZED_ONLY",
    Basic = "BASIC"
}
export declare class HealthcareProjectsLocationsDatasetsOperationsGetQueryParams extends SpeakeasyBase {
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
    view?: HealthcareProjectsLocationsDatasetsOperationsGetViewEnum;
}
export declare class HealthcareProjectsLocationsDatasetsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsOperationsGetRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsOperationsGetPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsOperationsGetQueryParams;
    security: HealthcareProjectsLocationsDatasetsOperationsGetSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
