import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddressTotalSentPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressTotalSentRequest extends SpeakeasyBase {
    pathParams: GetAddressTotalSentPathParams;
}
export declare class GetAddressTotalSentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressTotalSentResponse?: number;
}
