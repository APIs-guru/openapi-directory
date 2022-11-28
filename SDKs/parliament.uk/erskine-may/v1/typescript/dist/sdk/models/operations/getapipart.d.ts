import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiPartResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    erskineMayParts?: shared.ErskineMayPart[];
    statusCode: number;
}
