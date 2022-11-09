import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAnnotatedGenesUsingPostRequest extends SpeakeasyBase {
    request?: shared.AnnotatedGeneRequest;
}
export declare class GetAnnotatedGenesUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
