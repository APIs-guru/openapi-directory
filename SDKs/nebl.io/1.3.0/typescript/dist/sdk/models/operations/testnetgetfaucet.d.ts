import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetFaucetQueryParams extends SpeakeasyBase {
    address: string;
    amount?: number;
}
export declare class TestnetGetFaucetRequest extends SpeakeasyBase {
    queryParams: TestnetGetFaucetQueryParams;
}
export declare class TestnetGetFaucetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFaucetResponse?: shared.GetFaucetResponse;
}
