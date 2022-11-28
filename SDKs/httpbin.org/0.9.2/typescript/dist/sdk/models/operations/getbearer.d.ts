import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBearerHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class GetBearerRequest extends SpeakeasyBase {
    headers: GetBearerHeaders;
}
export declare class GetBearerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
