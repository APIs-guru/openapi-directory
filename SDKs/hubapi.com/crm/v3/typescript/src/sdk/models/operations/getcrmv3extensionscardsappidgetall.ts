import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCrmV3ExtensionsCardsAppIdGetAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetCrmV3ExtensionsCardsAppIdGetAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetCrmV3ExtensionsCardsAppIdGetAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCrmV3ExtensionsCardsAppIdGetAllPathParams;

  @Metadata()
  security: GetCrmV3ExtensionsCardsAppIdGetAllSecurity;
}


export class GetCrmV3ExtensionsCardsAppIdGetAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cardListResponse?: shared.CardListResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
