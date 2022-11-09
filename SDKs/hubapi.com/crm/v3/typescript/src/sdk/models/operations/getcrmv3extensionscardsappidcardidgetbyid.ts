import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;
}


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCrmV3ExtensionsCardsAppIdCardIdGetByIdPathParams;

  @Metadata()
  security: GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity;
}


export class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cardResponse?: shared.CardResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
