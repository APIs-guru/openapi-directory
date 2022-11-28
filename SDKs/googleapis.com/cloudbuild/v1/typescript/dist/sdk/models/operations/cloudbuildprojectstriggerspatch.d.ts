import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersPatchPathParams extends SpeakeasyBase {
    projectId: string;
    triggerId: string;
}
export declare class CloudbuildProjectsTriggersPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsTriggersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsTriggersPatchRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersPatchPathParams;
    queryParams: CloudbuildProjectsTriggersPatchQueryParams;
    request?: shared.BuildTriggerInput;
    security: CloudbuildProjectsTriggersPatchSecurity;
}
export declare class CloudbuildProjectsTriggersPatchResponse extends SpeakeasyBase {
    buildTrigger?: shared.BuildTrigger;
    contentType: string;
    statusCode: number;
}
