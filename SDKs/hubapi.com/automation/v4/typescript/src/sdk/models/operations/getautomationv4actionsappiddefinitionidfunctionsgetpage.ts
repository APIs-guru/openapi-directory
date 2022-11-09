import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams;

  @Metadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseActionFunctionIdentifierNoPaging?: shared.CollectionResponseActionFunctionIdentifierNoPaging;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
