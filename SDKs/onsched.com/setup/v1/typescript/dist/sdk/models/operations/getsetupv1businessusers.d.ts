import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1BusinessusersQueryParams extends SpeakeasyBase {
    email?: string;
    limit?: number;
    locationId?: string;
    offset?: number;
    role?: string;
}
export declare class GetSetupV1BusinessusersRequest extends SpeakeasyBase {
    queryParams: GetSetupV1BusinessusersQueryParams;
}
export declare class GetSetupV1BusinessusersResponse extends SpeakeasyBase {
    businessUserListViewModel?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
