import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsVideoLabelPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsVideoLabelQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsVideoLabelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsVideoLabelRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsVideoLabelPathParams;
    queryParams: DatalabelingProjectsDatasetsVideoLabelQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1LabelVideoRequest;
    security: DatalabelingProjectsDatasetsVideoLabelSecurity;
}
export declare class DatalabelingProjectsDatasetsVideoLabelResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
