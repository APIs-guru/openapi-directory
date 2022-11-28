import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsOperationsCancelSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsOperationsCancelSecurityOption1;
    option2?: DialogflowProjectsOperationsCancelSecurityOption2;
}
export declare class DialogflowProjectsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsOperationsCancelPathParams;
    queryParams: DialogflowProjectsOperationsCancelQueryParams;
    security: DialogflowProjectsOperationsCancelSecurity;
}
export declare class DialogflowProjectsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
