import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VideointelligenceVideosAnnotateQueryParams extends SpeakeasyBase {
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
export declare class VideointelligenceVideosAnnotateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VideointelligenceVideosAnnotateRequest extends SpeakeasyBase {
    queryParams: VideointelligenceVideosAnnotateQueryParams;
    request?: shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest;
    security: VideointelligenceVideosAnnotateSecurity;
}
export declare class VideointelligenceVideosAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
