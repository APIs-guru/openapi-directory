import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudassetProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudassetProjectsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: CloudassetProjectsOperationsGetPathParams;
    queryParams: CloudassetProjectsOperationsGetQueryParams;
    security: CloudassetProjectsOperationsGetSecurity;
}
export declare class CloudassetProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
