import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetOwnershipQueryParams extends SpeakeasyBase {
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetOwnershipRequest extends SpeakeasyBase {
    queryParams: GetOwnershipQueryParams;
}
export declare class GetOwnershipResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
