import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasehostingOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingOperationsCancelRequest extends SpeakeasyBase {
    pathParams: FirebasehostingOperationsCancelPathParams;
    queryParams: FirebasehostingOperationsCancelQueryParams;
    request?: Map<string, any>;
}
export declare class FirebasehostingOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
