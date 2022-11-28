import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionRelatedListQueryParams extends SpeakeasyBase {
    dataset?: string;
    featured?: string;
    id?: string;
    sort?: string;
    typeFilter?: string;
}
export declare class GetActionRelatedListRequest extends SpeakeasyBase {
    queryParams: GetActionRelatedListQueryParams;
}
export declare class GetActionRelatedListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
