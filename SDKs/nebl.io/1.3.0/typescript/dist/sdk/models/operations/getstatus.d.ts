import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetStatusQueryParams extends SpeakeasyBase {
    q?: string;
}
export declare class GetStatusRequest extends SpeakeasyBase {
    queryParams: GetStatusQueryParams;
}
export declare class GetStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatusResponse?: Map<string, any>;
}
