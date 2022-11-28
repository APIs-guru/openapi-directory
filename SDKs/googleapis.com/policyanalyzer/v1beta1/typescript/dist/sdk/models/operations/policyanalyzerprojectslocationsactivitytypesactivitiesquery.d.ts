import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryRequest extends SpeakeasyBase {
    pathParams: PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryPathParams;
    queryParams: PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryQueryParams;
    security: PolicyanalyzerProjectsLocationsActivityTypesActivitiesQuerySecurity;
}
export declare class PolicyanalyzerProjectsLocationsActivityTypesActivitiesQueryResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPolicyanalyzerV1beta1QueryActivityResponse?: shared.GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse;
    statusCode: number;
}
