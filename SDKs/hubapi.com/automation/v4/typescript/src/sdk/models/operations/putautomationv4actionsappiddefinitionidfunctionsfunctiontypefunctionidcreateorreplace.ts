import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION"
,    PreFetchOptions = "PRE_FETCH_OPTIONS"
,    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceFunctionTypeEnum;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplacePathParams;

  @Metadata({ data: "request, media_type=text/plain" })
  request: string;

  @Metadata()
  security: PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceSecurity;
}


export class PutAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdCreateOrReplaceResponse extends SpeakeasyBase {
  @Metadata()
  actionFunctionIdentifier?: shared.ActionFunctionIdentifier;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
