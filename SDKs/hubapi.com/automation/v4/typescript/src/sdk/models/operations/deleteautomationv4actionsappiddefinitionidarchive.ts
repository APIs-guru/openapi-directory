import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAutomationV4ActionsAppIdDefinitionIdArchivePathParams;

  @Metadata()
  security: DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
