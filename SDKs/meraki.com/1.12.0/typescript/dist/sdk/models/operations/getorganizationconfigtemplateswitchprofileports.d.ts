import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationConfigTemplateSwitchProfilePortsPathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
    profileId: string;
}
export declare class GetOrganizationConfigTemplateSwitchProfilePortsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationConfigTemplateSwitchProfilePortsPathParams;
}
export declare class GetOrganizationConfigTemplateSwitchProfilePortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJsonObject?: Map<string, any>;
}
