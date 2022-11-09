import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasestorageProjectsBucketsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasestorageProjectsBucketsListQueryParams extends SpeakeasyBase {
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
export declare class FirebasestorageProjectsBucketsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasestorageProjectsBucketsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasestorageProjectsBucketsListSecurity extends SpeakeasyBase {
    option1?: FirebasestorageProjectsBucketsListSecurityOption1;
    option2?: FirebasestorageProjectsBucketsListSecurityOption2;
}
export declare class FirebasestorageProjectsBucketsListRequest extends SpeakeasyBase {
    pathParams: FirebasestorageProjectsBucketsListPathParams;
    queryParams: FirebasestorageProjectsBucketsListQueryParams;
    security: FirebasestorageProjectsBucketsListSecurity;
}
export declare class FirebasestorageProjectsBucketsListResponse extends SpeakeasyBase {
    contentType: string;
    listBucketsResponse?: shared.ListBucketsResponse;
    statusCode: number;
}
