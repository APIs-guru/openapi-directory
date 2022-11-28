import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams;

  @SpeakeasyMetadata()
  security: DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
