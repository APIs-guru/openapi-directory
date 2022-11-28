import { SpeakeasyBase } from "../../../internal/utils";
export declare class CloneOrganizationPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CloneOrganizationRequestBody extends SpeakeasyBase {
    name: string;
}
export declare class CloneOrganizationRequest extends SpeakeasyBase {
    pathParams: CloneOrganizationPathParams;
    request: CloneOrganizationRequestBody;
}
export declare class CloneOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cloneOrganization201ApplicationJsonObject?: Map<string, any>;
}
