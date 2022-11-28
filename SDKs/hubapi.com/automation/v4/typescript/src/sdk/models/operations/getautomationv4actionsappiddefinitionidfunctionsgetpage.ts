import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPagePathParams;

  @SpeakeasyMetadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsGetPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  collectionResponseActionFunctionIdentifierNoPaging?: shared.CollectionResponseActionFunctionIdentifierNoPaging;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
