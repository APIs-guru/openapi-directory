import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetResourcesJsonQueryParams extends SpeakeasyBase {
    q: string;
}
export declare class GetResourcesJsonRequest extends SpeakeasyBase {
    queryParams: GetResourcesJsonQueryParams;
}
export declare class GetResourcesJsonResponse extends SpeakeasyBase {
    contentType: string;
    resourceWrappeds?: any[];
    statusCode: number;
}
