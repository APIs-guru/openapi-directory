import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSmApnsCertPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSmApnsCertRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSmApnsCertPathParams;
}
export declare class GetOrganizationSmApnsCertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSmApnsCert200ApplicationJsonObject?: Map<string, any>;
}
