import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCrmV3ExtensionsCardsAppIdCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostCrmV3ExtensionsCardsAppIdCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostCrmV3ExtensionsCardsAppIdCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCrmV3ExtensionsCardsAppIdCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CardCreateRequest;

  @SpeakeasyMetadata()
  security: PostCrmV3ExtensionsCardsAppIdCreateSecurity;
}


export class PostCrmV3ExtensionsCardsAppIdCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  cardResponse?: shared.CardResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
