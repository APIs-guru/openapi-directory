import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAutomationV4ActionsAppIdCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostAutomationV4ActionsAppIdCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostAutomationV4ActionsAppIdCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAutomationV4ActionsAppIdCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ExtensionActionDefinitionInput;

  @SpeakeasyMetadata()
  security: PostAutomationV4ActionsAppIdCreateSecurity;
}


export class PostAutomationV4ActionsAppIdCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  extensionActionDefinition?: shared.ExtensionActionDefinition;

  @SpeakeasyMetadata()
  statusCode: number;
}
