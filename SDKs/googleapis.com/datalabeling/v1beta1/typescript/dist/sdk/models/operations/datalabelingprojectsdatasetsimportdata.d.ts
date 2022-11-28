import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsDatasetsImportDataPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsDatasetsImportDataQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsDatasetsImportDataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsDatasetsImportDataRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsDatasetsImportDataPathParams;
    queryParams: DatalabelingProjectsDatasetsImportDataQueryParams;
    request?: shared.GoogleCloudDatalabelingV1beta1ImportDataRequest;
    security: DatalabelingProjectsDatasetsImportDataSecurity;
}
export declare class DatalabelingProjectsDatasetsImportDataResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
