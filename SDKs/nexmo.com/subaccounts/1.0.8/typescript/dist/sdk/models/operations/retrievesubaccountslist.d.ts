import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveSubaccountsListPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class RetrieveSubaccountsListSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RetrieveSubaccountsList401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class RetrieveSubaccountsList404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveSubaccountsListRequest extends SpeakeasyBase {
    pathParams: RetrieveSubaccountsListPathParams;
    security: RetrieveSubaccountsListSecurity;
}
export declare class RetrieveSubaccountsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccountsAllResponse?: any;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    retrieveSubaccountsList401ApplicationJsonObject?: RetrieveSubaccountsList401ApplicationJson;
    retrieveSubaccountsList404ApplicationJsonObject?: RetrieveSubaccountsList404ApplicationJson;
}
