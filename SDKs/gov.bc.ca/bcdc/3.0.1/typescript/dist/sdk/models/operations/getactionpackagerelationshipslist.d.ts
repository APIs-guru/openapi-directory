import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetActionPackageRelationshipsListQueryParams extends SpeakeasyBase {
    id?: string;
    id2?: string;
    rel?: string;
}
export declare class GetActionPackageRelationshipsListRequest extends SpeakeasyBase {
    queryParams: GetActionPackageRelationshipsListQueryParams;
}
export declare class GetActionPackageRelationshipsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
