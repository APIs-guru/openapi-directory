import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationConfigTemplateSwitchProfilePortPathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
    portId: string;
    profileId: string;
}
export declare class GetOrganizationConfigTemplateSwitchProfilePortRequest extends SpeakeasyBase {
    pathParams: GetOrganizationConfigTemplateSwitchProfilePortPathParams;
}
export declare class GetOrganizationConfigTemplateSwitchProfilePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationConfigTemplateSwitchProfilePort200ApplicationJsonObject?: Map<string, any>;
}
