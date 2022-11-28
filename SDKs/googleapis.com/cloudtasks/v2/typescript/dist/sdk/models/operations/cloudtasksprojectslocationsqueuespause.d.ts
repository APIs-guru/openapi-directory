import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesPausePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesPauseQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesPauseRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesPausePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesPauseQueryParams;
    request?: Map<string, any>;
    security: CloudtasksProjectsLocationsQueuesPauseSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesPauseResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue;
    statusCode: number;
}
