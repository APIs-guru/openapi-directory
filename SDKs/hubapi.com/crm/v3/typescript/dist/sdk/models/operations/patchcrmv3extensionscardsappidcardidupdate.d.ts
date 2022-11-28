import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams extends SpeakeasyBase {
    appId: number;
    cardId: string;
}
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest extends SpeakeasyBase {
    pathParams: PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams;
    request: shared.CardPatchRequest;
    security: PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity;
}
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    cardResponse?: shared.CardResponse;
    contentType: string;
    statusCode: number;
}
