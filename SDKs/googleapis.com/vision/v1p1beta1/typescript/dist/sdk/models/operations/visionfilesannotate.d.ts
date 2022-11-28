import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionFilesAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionFilesAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionFilesAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionFilesAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionFilesAnnotateSecurityOption1;
    option2?: VisionFilesAnnotateSecurityOption2;
}
export declare class VisionFilesAnnotateRequest extends SpeakeasyBase {
    queryParams: VisionFilesAnnotateQueryParams;
    request?: shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest;
    security: VisionFilesAnnotateSecurity;
}
export declare class VisionFilesAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudVisionV1p1beta1BatchAnnotateFilesResponse?: shared.GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse;
    statusCode: number;
}
