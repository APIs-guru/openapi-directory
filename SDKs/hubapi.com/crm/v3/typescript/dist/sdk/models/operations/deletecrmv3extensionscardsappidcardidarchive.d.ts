import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams extends SpeakeasyBase {
    appId: number;
    cardId: string;
}
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams;
    security: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;
}
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
