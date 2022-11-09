import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExtensionActionDefinitionPatch;

  @Metadata()
  security: PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity;
}


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  extensionActionDefinition?: shared.ExtensionActionDefinition;

  @Metadata()
  statusCode: number;
}
