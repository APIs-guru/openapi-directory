import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsGetDefaultBranchPathParams extends SpeakeasyBase {
    catalog: string;
}
export declare class RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsGetDefaultBranchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsGetDefaultBranchRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsGetDefaultBranchPathParams;
    queryParams: RetailProjectsLocationsCatalogsGetDefaultBranchQueryParams;
    security: RetailProjectsLocationsCatalogsGetDefaultBranchSecurity;
}
export declare class RetailProjectsLocationsCatalogsGetDefaultBranchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaGetDefaultBranchResponse?: shared.GoogleCloudRetailV2betaGetDefaultBranchResponse;
    statusCode: number;
}
