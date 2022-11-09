import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTokenHoldersPathParams extends SpeakeasyBase {
    tokenid: string;
}
export declare class GetTokenHoldersRequest extends SpeakeasyBase {
    pathParams: GetTokenHoldersPathParams;
}
export declare class GetTokenHoldersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
