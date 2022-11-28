import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDripQueryParams extends SpeakeasyBase {
    code?: number;
    delay?: number;
    duration?: number;
    numbytes?: number;
}
export declare class GetDripRequest extends SpeakeasyBase {
    queryParams: GetDripQueryParams;
}
export declare class GetDripResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
