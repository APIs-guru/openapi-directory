import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams extends SpeakeasyBase {
    humanReviewConfig: string;
}
export declare class DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentQueryParams;
    request?: shared.GoogleCloudDocumentaiV1beta3ReviewDocumentRequest;
    security: DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
