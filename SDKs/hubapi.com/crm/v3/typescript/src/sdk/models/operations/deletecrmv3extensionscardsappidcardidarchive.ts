import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;
}


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams;

  @Metadata()
  security: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;
}


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
