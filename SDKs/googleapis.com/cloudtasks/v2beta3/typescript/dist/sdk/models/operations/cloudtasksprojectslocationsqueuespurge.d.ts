import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesPurgePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesPurgeQueryParams extends SpeakeasyBase {
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
export declare class CloudtasksProjectsLocationsQueuesPurgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesPurgeRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesPurgePathParams;
    queryParams: CloudtasksProjectsLocationsQueuesPurgeQueryParams;
    request?: Map<string, any>;
    security: CloudtasksProjectsLocationsQueuesPurgeSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesPurgeResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue1;
    statusCode: number;
}
