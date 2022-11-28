import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetGetTokenIdPathParams extends SpeakeasyBase {
    tokensymbol: string;
}
export declare class TestnetGetTokenIdRequest extends SpeakeasyBase {
    pathParams: TestnetGetTokenIdPathParams;
}
export declare class TestnetGetTokenIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTokenIdResponse?: shared.GetTokenIdResponse;
}
