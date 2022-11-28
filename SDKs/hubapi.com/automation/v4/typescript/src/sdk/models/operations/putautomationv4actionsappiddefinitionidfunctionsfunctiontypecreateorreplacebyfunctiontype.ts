import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeFunctionTypeEnum;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request: string;

  @SpeakeasyMetadata()
  security: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeSecurity;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeCreateOrReplaceByFunctionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionFunctionIdentifier?: shared.ActionFunctionIdentifier;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
