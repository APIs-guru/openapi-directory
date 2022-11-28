import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveSubaccountPathParams extends SpeakeasyBase {
    apiKey: string;
    subaccountKey: string;
}
export declare class RetrieveSubaccountSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class RetrieveSubaccount401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class RetrieveSubaccount404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class RetrieveSubaccountRequest extends SpeakeasyBase {
    pathParams: RetrieveSubaccountPathParams;
    security: RetrieveSubaccountSecurity;
}
export declare class RetrieveSubaccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccountResponse?: any;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    retrieveSubaccount401ApplicationJsonObject?: RetrieveSubaccount401ApplicationJson;
    retrieveSubaccount404ApplicationJsonObject?: RetrieveSubaccount404ApplicationJson;
}
