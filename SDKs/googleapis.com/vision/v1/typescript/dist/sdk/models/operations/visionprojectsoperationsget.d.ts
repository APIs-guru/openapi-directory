import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VisionProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class VisionProjectsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionProjectsOperationsGetSecurity extends SpeakeasyBase {
    option1?: VisionProjectsOperationsGetSecurityOption1;
    option2?: VisionProjectsOperationsGetSecurityOption2;
}
export declare class VisionProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: VisionProjectsOperationsGetPathParams;
    queryParams: VisionProjectsOperationsGetQueryParams;
    security: VisionProjectsOperationsGetSecurity;
}
export declare class VisionProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
