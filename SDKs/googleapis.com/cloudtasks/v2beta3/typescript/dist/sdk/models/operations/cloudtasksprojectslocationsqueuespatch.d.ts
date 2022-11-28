import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudtasksProjectsLocationsQueuesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudtasksProjectsLocationsQueuesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesPatchRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesPatchPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesPatchQueryParams;
    request?: shared.Queue;
    security: CloudtasksProjectsLocationsQueuesPatchSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesPatchResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue1;
    statusCode: number;
}
