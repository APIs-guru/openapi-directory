import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCrmV3ExtensionsCardsAppIdCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostCrmV3ExtensionsCardsAppIdCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostCrmV3ExtensionsCardsAppIdCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCrmV3ExtensionsCardsAppIdCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CardCreateRequest;

  @Metadata()
  security: PostCrmV3ExtensionsCardsAppIdCreateSecurity;
}


export class PostCrmV3ExtensionsCardsAppIdCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  cardResponse?: shared.CardResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
