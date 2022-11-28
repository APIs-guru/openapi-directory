import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrmV3ExtensionsCardsAppIdGetAllPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetCrmV3ExtensionsCardsAppIdGetAllSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetCrmV3ExtensionsCardsAppIdGetAllRequest extends SpeakeasyBase {
    pathParams: GetCrmV3ExtensionsCardsAppIdGetAllPathParams;
    security: GetCrmV3ExtensionsCardsAppIdGetAllSecurity;
}
export declare class GetCrmV3ExtensionsCardsAppIdGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cardListResponse?: shared.CardListResponse;
    contentType: string;
    statusCode: number;
}
