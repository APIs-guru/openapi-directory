import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VerifyCheckPathParams extends SpeakeasyBase {
    format: shared.FormatEnum;
}
export declare class VerifyCheckRequest extends SpeakeasyBase {
    pathParams: VerifyCheckPathParams;
    request: shared.CheckRequest;
}
export declare class VerifyCheckResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    verifyCheck200ApplicationJsonOneOf?: any;
}
