import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetEntitiesQueryParams extends SpeakeasyBase {
    appToken?: string;
    entityId?: string;
    entityName?: string;
    entityType?: string;
}
export declare class GetEntitiesHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class GetEntitiesRequest extends SpeakeasyBase {
    queryParams: GetEntitiesQueryParams;
    headers: GetEntitiesHeaders;
}
export declare class GetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
