import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenBankNucleotideMappingUsingPostRequest extends SpeakeasyBase {
    request?: shared.RgdidListRequest;
}
export declare class GetGenBankNucleotideMappingUsingPostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
