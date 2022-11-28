import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=text/plain" })
  request: string;

  @SpeakeasyMetadata()
  security: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionFunctionIdentifier?: shared.ActionFunctionIdentifier;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
