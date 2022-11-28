import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsOperationsCancelPathParams;
    queryParams: DatalabelingProjectsOperationsCancelQueryParams;
    security: DatalabelingProjectsOperationsCancelSecurity;
}
export declare class DatalabelingProjectsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
