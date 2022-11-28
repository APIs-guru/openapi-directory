import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;
}


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CardPatchRequest;

  @SpeakeasyMetadata()
  security: PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity;
}


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cardResponse?: shared.CardResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
