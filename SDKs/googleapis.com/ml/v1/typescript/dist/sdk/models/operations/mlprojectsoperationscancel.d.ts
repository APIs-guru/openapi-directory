import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: MlProjectsOperationsCancelPathParams;
    queryParams: MlProjectsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: MlProjectsOperationsCancelSecurity;
}
export declare class MlProjectsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
