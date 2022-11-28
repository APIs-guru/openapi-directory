import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAddressUtxosPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressUtxosRequest extends SpeakeasyBase {
    pathParams: GetAddressUtxosPathParams;
}
export declare class GetAddressUtxosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
