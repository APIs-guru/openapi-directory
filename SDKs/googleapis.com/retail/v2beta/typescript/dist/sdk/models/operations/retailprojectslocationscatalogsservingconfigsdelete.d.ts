import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsDeleteRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsDeletePathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsDeleteQueryParams;
    security: RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
