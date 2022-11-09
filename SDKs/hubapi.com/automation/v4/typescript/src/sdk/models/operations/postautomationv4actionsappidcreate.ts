import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAutomationV4ActionsAppIdCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostAutomationV4ActionsAppIdCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostAutomationV4ActionsAppIdCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAutomationV4ActionsAppIdCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ExtensionActionDefinitionInput;

  @Metadata()
  security: PostAutomationV4ActionsAppIdCreateSecurity;
}


export class PostAutomationV4ActionsAppIdCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  extensionActionDefinition?: shared.ExtensionActionDefinition;

  @Metadata()
  statusCode: number;
}
