import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cardId" })
  cardId: string;
}


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCrmV3ExtensionsCardsAppIdCardIdArchivePathParams;

  @SpeakeasyMetadata()
  security: DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;
}


export class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
