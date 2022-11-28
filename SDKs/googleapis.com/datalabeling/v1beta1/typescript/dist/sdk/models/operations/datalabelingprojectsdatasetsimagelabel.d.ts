import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsImageLabelPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsImageLabelQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsImageLabelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsImageLabelRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsImageLabelPathParams;
    queryParams: DatalabelingProjectsDatasetsImageLabelQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1LabelImageRequest;
    security: DatalabelingProjectsDatasetsImageLabelSecurity;
}
export declare class DatalabelingProjectsDatasetsImageLabelResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
