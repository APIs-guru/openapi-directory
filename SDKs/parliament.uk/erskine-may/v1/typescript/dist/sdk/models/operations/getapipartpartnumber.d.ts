import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPartPartNumberPathParams extends SpeakeasyBase {
    partNumber: number;
}
export declare class GetApiPartPartNumberRequest extends SpeakeasyBase {
    pathParams: GetApiPartPartNumberPathParams;
}
export declare class GetApiPartPartNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMayPart?: shared.ErskineMayPart;
    statusCode: number;
}
