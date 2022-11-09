import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TestnetGetStatusQueryParams extends SpeakeasyBase {
    q?: string;
}
export declare class TestnetGetStatusRequest extends SpeakeasyBase {
    queryParams: TestnetGetStatusQueryParams;
}
export declare class TestnetGetStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatusResponse?: Map<string, any>;
}
