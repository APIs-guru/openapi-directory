import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCrmV3ExtensionsCardsAppIdGetAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetCrmV3ExtensionsCardsAppIdGetAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetCrmV3ExtensionsCardsAppIdGetAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCrmV3ExtensionsCardsAppIdGetAllPathParams;

  @SpeakeasyMetadata()
  security: GetCrmV3ExtensionsCardsAppIdGetAllSecurity;
}


export class GetCrmV3ExtensionsCardsAppIdGetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cardListResponse?: shared.CardListResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
