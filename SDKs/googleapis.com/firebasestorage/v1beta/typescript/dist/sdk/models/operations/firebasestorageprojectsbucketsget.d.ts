import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasestorageProjectsBucketsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasestorageProjectsBucketsGetQueryParams extends SpeakeasyBase {
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
export declare class FirebasestorageProjectsBucketsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasestorageProjectsBucketsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasestorageProjectsBucketsGetSecurity extends SpeakeasyBase {
    option1?: FirebasestorageProjectsBucketsGetSecurityOption1;
    option2?: FirebasestorageProjectsBucketsGetSecurityOption2;
}
export declare class FirebasestorageProjectsBucketsGetRequest extends SpeakeasyBase {
    pathParams: FirebasestorageProjectsBucketsGetPathParams;
    queryParams: FirebasestorageProjectsBucketsGetQueryParams;
    security: FirebasestorageProjectsBucketsGetSecurity;
}
export declare class FirebasestorageProjectsBucketsGetResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
