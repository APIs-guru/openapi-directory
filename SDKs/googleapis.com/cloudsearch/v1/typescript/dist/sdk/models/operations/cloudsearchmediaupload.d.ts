import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchMediaUploadPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class CloudsearchMediaUploadQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchMediaUploadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchMediaUploadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchMediaUploadSecurity extends SpeakeasyBase {
    option1?: CloudsearchMediaUploadSecurityOption1;
    option2?: CloudsearchMediaUploadSecurityOption2;
}
export declare class CloudsearchMediaUploadRequest extends SpeakeasyBase {
    pathParams: CloudsearchMediaUploadPathParams;
    queryParams: CloudsearchMediaUploadQueryParams;
    request?: Uint8Array;
    security: CloudsearchMediaUploadSecurity;
}
export declare class CloudsearchMediaUploadResponse extends SpeakeasyBase {
    contentType: string;
    media?: shared.Media;
    statusCode: number;
}
