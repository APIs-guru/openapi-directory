import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationConfigTemplateSwitchProfilesPathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class GetOrganizationConfigTemplateSwitchProfilesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationConfigTemplateSwitchProfilesPathParams;
}
export declare class GetOrganizationConfigTemplateSwitchProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationConfigTemplateSwitchProfiles200ApplicationJsonObject?: Map<string, any>;
}
