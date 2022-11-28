import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRealmAuthenticationPerClientConfigDescriptionPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAuthenticationPerClientConfigDescriptionRequest extends SpeakeasyBase {
    pathParams: GetRealmAuthenticationPerClientConfigDescriptionPathParams;
}
export declare class GetRealmAuthenticationPerClientConfigDescriptionResponse extends SpeakeasyBase {
    contentType: string;
    getRealmAuthenticationPerClientConfigDescription2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
