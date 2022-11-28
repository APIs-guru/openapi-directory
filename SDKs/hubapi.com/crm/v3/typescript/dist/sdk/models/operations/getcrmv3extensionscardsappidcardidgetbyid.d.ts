import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams extends SpeakeasyBase {
    appId: number;
    cardId: string;
}
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams;
    security: GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity;
}
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cardResponse?: shared.CardResponse;
    contentType: string;
    statusCode: number;
}
