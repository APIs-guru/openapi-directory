import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsSetDefaultBranchPathParams extends SpeakeasyBase {
    catalog: string;
}
export declare class RetailProjectsLocationsCatalogsSetDefaultBranchQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsSetDefaultBranchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsSetDefaultBranchRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsSetDefaultBranchPathParams;
    queryParams: RetailProjectsLocationsCatalogsSetDefaultBranchQueryParams;
    request?: shared.GoogleCloudRetailV2alphaSetDefaultBranchRequest;
    security: RetailProjectsLocationsCatalogsSetDefaultBranchSecurity;
}
export declare class RetailProjectsLocationsCatalogsSetDefaultBranchResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
