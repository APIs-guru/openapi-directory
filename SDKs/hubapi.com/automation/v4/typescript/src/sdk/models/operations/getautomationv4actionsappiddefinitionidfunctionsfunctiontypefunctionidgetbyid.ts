import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdFunctionTypeEnum;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdPathParams;

  @SpeakeasyMetadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionFunction?: shared.ActionFunction;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
