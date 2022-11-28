import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddKvPairsRequest extends SpeakeasyBase {
    request: shared.KeyValuePairInput;
}
export declare class AddKvPairsResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
