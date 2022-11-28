import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsCompletionDataImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsCompletionDataImportQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsCompletionDataImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsCompletionDataImportRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsCompletionDataImportPathParams;
    queryParams: RetailProjectsLocationsCatalogsCompletionDataImportQueryParams;
    request?: shared.GoogleCloudRetailV2betaImportCompletionDataRequest;
    security: RetailProjectsLocationsCatalogsCompletionDataImportSecurity;
}
export declare class RetailProjectsLocationsCatalogsCompletionDataImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
