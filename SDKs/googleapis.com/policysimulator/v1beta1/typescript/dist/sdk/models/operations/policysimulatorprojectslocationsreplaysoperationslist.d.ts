import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolicysimulatorProjectsLocationsReplaysOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams extends SpeakeasyBase {
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
export declare class PolicysimulatorProjectsLocationsReplaysOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PolicysimulatorProjectsLocationsReplaysOperationsListRequest extends SpeakeasyBase {
    pathParams: PolicysimulatorProjectsLocationsReplaysOperationsListPathParams;
    queryParams: PolicysimulatorProjectsLocationsReplaysOperationsListQueryParams;
    security: PolicysimulatorProjectsLocationsReplaysOperationsListSecurity;
}
export declare class PolicysimulatorProjectsLocationsReplaysOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
