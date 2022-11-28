import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSmVppAccountPathParams extends SpeakeasyBase {
    organizationId: string;
    vppAccountId: string;
}
export declare class GetOrganizationSmVppAccountRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSmVppAccountPathParams;
}
export declare class GetOrganizationSmVppAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSmVppAccount200ApplicationJsonObject?: Map<string, any>;
}
