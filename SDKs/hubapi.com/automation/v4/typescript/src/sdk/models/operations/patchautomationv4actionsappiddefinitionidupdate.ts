import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAutomationV4ActionsAppIdDefinitionIdUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExtensionActionDefinitionPatch;

  @SpeakeasyMetadata()
  security: PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity;
}


export class PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  extensionActionDefinition?: shared.ExtensionActionDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}
