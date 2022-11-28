import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSmVppAccountsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSmVppAccountsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSmVppAccountsPathParams;
}
export declare class GetOrganizationSmVppAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSmVppAccounts200ApplicationJsonObject?: Map<string, any>;
}
