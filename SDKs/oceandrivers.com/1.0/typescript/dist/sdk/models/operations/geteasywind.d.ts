import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEasywindPathParams extends SpeakeasyBase {
    easywindId: string;
}
export declare class GetEasywindQueryParams extends SpeakeasyBase {
    period: string;
}
export declare class GetEasywindRequest extends SpeakeasyBase {
    pathParams: GetEasywindPathParams;
    queryParams: GetEasywindQueryParams;
}
export declare class GetEasywindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
