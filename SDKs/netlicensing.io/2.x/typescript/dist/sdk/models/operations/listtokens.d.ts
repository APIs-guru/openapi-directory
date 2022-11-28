import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTokensSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ListTokensRequest extends SpeakeasyBase {
    security: ListTokensSecurity;
}
export declare class ListTokensResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensings?: any[];
}
