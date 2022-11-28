import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;
}


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams;

  @SpeakeasyMetadata()
  security: GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity;
}


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cardResponse?: shared.CardResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
