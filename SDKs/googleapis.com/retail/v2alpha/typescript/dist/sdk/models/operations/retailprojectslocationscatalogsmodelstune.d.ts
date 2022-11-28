import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsModelsTunePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsLocationsCatalogsModelsTuneQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsModelsTuneSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsModelsTuneRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsModelsTunePathParams;
    queryParams: RetailProjectsLocationsCatalogsModelsTuneQueryParams;
    request?: Map<string, any>;
    security: RetailProjectsLocationsCatalogsModelsTuneSecurity;
}
export declare class RetailProjectsLocationsCatalogsModelsTuneResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
