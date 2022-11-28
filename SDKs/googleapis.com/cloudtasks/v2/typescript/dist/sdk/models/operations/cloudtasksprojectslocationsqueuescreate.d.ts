import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudtasksProjectsLocationsQueuesCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesCreateRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesCreatePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesCreateQueryParams;
    request?: shared.Queue;
    security: CloudtasksProjectsLocationsQueuesCreateSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesCreateResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue;
    statusCode: number;
}
