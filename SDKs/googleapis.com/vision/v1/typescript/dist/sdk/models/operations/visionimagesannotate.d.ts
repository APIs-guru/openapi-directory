import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VisionImagesAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VisionImagesAnnotateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionImagesAnnotateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VisionImagesAnnotateSecurity extends SpeakeasyBase {
    option1?: VisionImagesAnnotateSecurityOption1;
    option2?: VisionImagesAnnotateSecurityOption2;
}
export declare class VisionImagesAnnotateRequest extends SpeakeasyBase {
    queryParams: VisionImagesAnnotateQueryParams;
    request?: shared.BatchAnnotateImagesRequest;
    security: VisionImagesAnnotateSecurity;
}
export declare class VisionImagesAnnotateResponse extends SpeakeasyBase {
    batchAnnotateImagesResponse?: shared.BatchAnnotateImagesResponse;
    contentType: string;
    statusCode: number;
}
