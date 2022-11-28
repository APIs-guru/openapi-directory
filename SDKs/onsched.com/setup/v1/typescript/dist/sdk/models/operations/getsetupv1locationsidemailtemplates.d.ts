import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetupV1LocationsIdEmailTemplatesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsIdEmailTemplatesPathParams;
}
export declare class GetSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    emailTemplateListViewModel?: Map<string, any>;
    statusCode: number;
}
