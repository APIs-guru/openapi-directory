import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1BusinessusersPermissionsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    role?: string;
}
export declare class GetSetupV1BusinessusersPermissionsRequest extends SpeakeasyBase {
    queryParams: GetSetupV1BusinessusersPermissionsQueryParams;
}
export declare class GetSetupV1BusinessusersPermissionsResponse extends SpeakeasyBase {
    businessPermissionListViewModel?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
