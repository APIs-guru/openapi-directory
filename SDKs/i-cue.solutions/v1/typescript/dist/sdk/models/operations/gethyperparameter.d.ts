import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHyperparameterHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetHyperparameterRequest extends SpeakeasyBase {
    headers: GetHyperparameterHeaders;
}
export declare class GetHyperparameterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    hyperparameterModel?: shared.HyperparameterModel;
    statusCode: number;
}
