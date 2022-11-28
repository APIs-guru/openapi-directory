import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCrmV3ExtensionsCardsAppIdCreatePathParams extends SpeakeasyBase {
    appId: number;
}
export declare class PostCrmV3ExtensionsCardsAppIdCreateSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PostCrmV3ExtensionsCardsAppIdCreateRequest extends SpeakeasyBase {
    pathParams: PostCrmV3ExtensionsCardsAppIdCreatePathParams;
    request: shared.CardCreateRequest;
    security: PostCrmV3ExtensionsCardsAppIdCreateSecurity;
}
export declare class PostCrmV3ExtensionsCardsAppIdCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cardResponse?: shared.CardResponse;
    contentType: string;
    statusCode: number;
}
