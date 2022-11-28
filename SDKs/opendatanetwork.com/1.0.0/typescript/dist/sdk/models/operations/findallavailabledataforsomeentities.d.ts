import { SpeakeasyBase } from "../../../internal/utils";
export declare class FindAllAvailableDataForSomeEntitiesQueryParams extends SpeakeasyBase {
    appToken?: string;
    entityId: string;
}
export declare class FindAllAvailableDataForSomeEntitiesHeaders extends SpeakeasyBase {
    xAppToken?: string;
}
export declare class FindAllAvailableDataForSomeEntitiesRequest extends SpeakeasyBase {
    queryParams: FindAllAvailableDataForSomeEntitiesQueryParams;
    headers: FindAllAvailableDataForSomeEntitiesHeaders;
}
export declare class FindAllAvailableDataForSomeEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
