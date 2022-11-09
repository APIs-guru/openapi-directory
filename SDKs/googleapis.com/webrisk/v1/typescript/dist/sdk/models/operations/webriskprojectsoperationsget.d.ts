import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebriskProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class WebriskProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class WebriskProjectsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class WebriskProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: WebriskProjectsOperationsGetPathParams;
    queryParams: WebriskProjectsOperationsGetQueryParams;
    security: WebriskProjectsOperationsGetSecurity;
}
export declare class WebriskProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
