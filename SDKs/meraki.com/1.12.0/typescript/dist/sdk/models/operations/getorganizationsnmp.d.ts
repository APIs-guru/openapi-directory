import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSnmpPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSnmpRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSnmpPathParams;
}
export declare class GetOrganizationSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSnmp200ApplicationJsonObject?: Map<string, any>;
}
