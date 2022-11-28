import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsExportDataPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsDatasetsExportDataQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsExportDataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsExportDataRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsExportDataPathParams;
    queryParams: DatalabelingProjectsDatasetsExportDataQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1ExportDataRequest;
    security: DatalabelingProjectsDatasetsExportDataSecurity;
}
export declare class DatalabelingProjectsDatasetsExportDataResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
