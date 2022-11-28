import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams extends SpeakeasyBase {
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
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestRequest extends SpeakeasyBase {
    pathParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestPathParams;
    queryParams: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestQueryParams;
    request?: shared.IngestMessageRequestInput;
    security: HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestSecurity;
}
export declare class HealthcareProjectsLocationsDatasetsHl7V2StoresMessagesIngestResponse extends SpeakeasyBase {
    contentType: string;
    ingestMessageResponse?: shared.IngestMessageResponse;
    statusCode: number;
}
