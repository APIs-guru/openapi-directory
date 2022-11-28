import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasehostingOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: FirebasehostingOperationsDeletePathParams;
    queryParams: FirebasehostingOperationsDeleteQueryParams;
}
export declare class FirebasehostingOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
