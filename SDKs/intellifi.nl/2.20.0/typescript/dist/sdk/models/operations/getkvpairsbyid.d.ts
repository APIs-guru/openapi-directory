import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKvPairsByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetKvPairsByIdRequest extends SpeakeasyBase {
    pathParams: GetKvPairsByIdPathParams;
}
export declare class GetKvPairsByIdResponse extends SpeakeasyBase {
    contentType: string;
    keyValuePair?: shared.KeyValuePair;
    statusCode: number;
}
