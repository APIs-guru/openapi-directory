import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatusCodesPathParams extends SpeakeasyBase {
    codes: string;
}
export declare class GetStatusCodesRequest extends SpeakeasyBase {
    pathParams: GetStatusCodesPathParams;
}
export declare class GetStatusCodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
