import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrthologsByListUsingPostRequest extends SpeakeasyBase {
    request: shared.OrthologRequest;
}
export declare class GetOrthologsByListUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
