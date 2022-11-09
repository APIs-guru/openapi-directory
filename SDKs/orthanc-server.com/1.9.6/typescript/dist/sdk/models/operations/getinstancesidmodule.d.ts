import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdModuleQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetInstancesIdModuleRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdModulePathParams;
    queryParams: GetInstancesIdModuleQueryParams;
}
export declare class GetInstancesIdModuleResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdModule200ApplicationJsonAny?: any;
    statusCode: number;
}
