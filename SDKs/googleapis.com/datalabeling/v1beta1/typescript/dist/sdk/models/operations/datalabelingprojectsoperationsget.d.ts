import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatalabelingProjectsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsOperationsGetPathParams;
    queryParams: DatalabelingProjectsOperationsGetQueryParams;
    security: DatalabelingProjectsOperationsGetSecurity;
}
export declare class DatalabelingProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
