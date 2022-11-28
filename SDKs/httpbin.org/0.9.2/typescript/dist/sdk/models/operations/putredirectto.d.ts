import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutRedirectToRequestBody extends SpeakeasyBase {
    statusCode?: number;
    url: string;
}
export declare class PutRedirectToRequest extends SpeakeasyBase {
    request: PutRedirectToRequestBody;
}
export declare class PutRedirectToResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
