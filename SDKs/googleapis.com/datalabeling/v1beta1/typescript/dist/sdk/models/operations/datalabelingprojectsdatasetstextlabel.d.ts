import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsTextLabelPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsDatasetsTextLabelQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsTextLabelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsTextLabelRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsTextLabelPathParams;
    queryParams: DatalabelingProjectsDatasetsTextLabelQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1LabelTextRequest;
    security: DatalabelingProjectsDatasetsTextLabelSecurity;
}
export declare class DatalabelingProjectsDatasetsTextLabelResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
