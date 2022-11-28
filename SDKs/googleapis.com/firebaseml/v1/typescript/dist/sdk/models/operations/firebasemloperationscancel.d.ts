import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasemlOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasemlOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class FirebasemlOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasemlOperationsCancelRequest extends SpeakeasyBase {
    pathParams: FirebasemlOperationsCancelPathParams;
    queryParams: FirebasemlOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: FirebasemlOperationsCancelSecurity;
}
export declare class FirebasemlOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
