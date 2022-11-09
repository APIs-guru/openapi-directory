import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAddressTotalReceivedPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressTotalReceivedRequest extends SpeakeasyBase {
    pathParams: GetAddressTotalReceivedPathParams;
}
export declare class GetAddressTotalReceivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressTotalReceivedResponse?: number;
}
