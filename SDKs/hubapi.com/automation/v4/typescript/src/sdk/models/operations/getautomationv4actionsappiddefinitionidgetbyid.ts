import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdGetByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAutomationV4ActionsAppIdDefinitionIdGetByIdQueryParams;

  @SpeakeasyMetadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  extensionActionDefinition?: shared.ExtensionActionDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}
