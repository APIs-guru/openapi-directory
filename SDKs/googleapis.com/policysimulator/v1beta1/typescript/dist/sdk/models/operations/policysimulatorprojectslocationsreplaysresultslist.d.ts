import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolicysimulatorProjectsLocationsReplaysResultsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PolicysimulatorProjectsLocationsReplaysResultsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PolicysimulatorProjectsLocationsReplaysResultsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PolicysimulatorProjectsLocationsReplaysResultsListRequest extends SpeakeasyBase {
    pathParams: PolicysimulatorProjectsLocationsReplaysResultsListPathParams;
    queryParams: PolicysimulatorProjectsLocationsReplaysResultsListQueryParams;
    security: PolicysimulatorProjectsLocationsReplaysResultsListSecurity;
}
export declare class PolicysimulatorProjectsLocationsReplaysResultsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPolicysimulatorV1beta1ListReplayResultsResponse?: shared.GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse;
    statusCode: number;
}
