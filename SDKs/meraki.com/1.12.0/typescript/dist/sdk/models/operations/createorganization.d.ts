import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CreateOrganizationRequest extends SpeakeasyBase {
    request: CreateOrganizationRequestBody;
}
export declare class CreateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganization201ApplicationJsonObject?: Map<string, any>;
}
