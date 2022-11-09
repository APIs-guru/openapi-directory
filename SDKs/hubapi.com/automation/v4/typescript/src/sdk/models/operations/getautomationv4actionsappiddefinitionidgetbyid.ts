import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams;

  @Metadata()
  queryParams: GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams;

  @Metadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  extensionActionDefinition?: shared.ExtensionActionDefinition;

  @Metadata()
  statusCode: number;
}
