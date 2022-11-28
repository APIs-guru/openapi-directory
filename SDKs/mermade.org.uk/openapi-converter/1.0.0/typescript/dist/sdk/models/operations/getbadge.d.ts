import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBadgeQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class GetBadgeRequest extends SpeakeasyBase {
    queryParams: GetBadgeQueryParams;
}
export declare class GetBadgeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
