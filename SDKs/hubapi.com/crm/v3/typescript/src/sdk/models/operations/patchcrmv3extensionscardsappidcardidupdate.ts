import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;
}


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchCrmV3ExtensionsCardsAppIdCardIdUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CardPatchRequest;

  @Metadata()
  security: PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity;
}


export class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cardResponse?: shared.CardResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
