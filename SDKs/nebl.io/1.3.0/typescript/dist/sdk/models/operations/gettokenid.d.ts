import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTokenIdPathParams extends SpeakeasyBase {
    tokensymbol: string;
}
export declare class GetTokenIdRequest extends SpeakeasyBase {
    pathParams: GetTokenIdPathParams;
}
export declare class GetTokenIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTokenIdResponse?: shared.GetTokenIdResponse;
}
