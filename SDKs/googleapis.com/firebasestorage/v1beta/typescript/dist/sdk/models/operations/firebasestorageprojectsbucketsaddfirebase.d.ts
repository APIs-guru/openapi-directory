import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasestorageProjectsBucketsAddFirebasePathParams extends SpeakeasyBase {
    bucket: string;
}
export declare class FirebasestorageProjectsBucketsAddFirebaseQueryParams extends SpeakeasyBase {
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
export declare class FirebasestorageProjectsBucketsAddFirebaseSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasestorageProjectsBucketsAddFirebaseSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasestorageProjectsBucketsAddFirebaseSecurity extends SpeakeasyBase {
    option1?: FirebasestorageProjectsBucketsAddFirebaseSecurityOption1;
    option2?: FirebasestorageProjectsBucketsAddFirebaseSecurityOption2;
}
export declare class FirebasestorageProjectsBucketsAddFirebaseRequest extends SpeakeasyBase {
    pathParams: FirebasestorageProjectsBucketsAddFirebasePathParams;
    queryParams: FirebasestorageProjectsBucketsAddFirebaseQueryParams;
    request?: Map<string, any>;
    security: FirebasestorageProjectsBucketsAddFirebaseSecurity;
}
export declare class FirebasestorageProjectsBucketsAddFirebaseResponse extends SpeakeasyBase {
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
}
