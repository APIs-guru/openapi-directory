import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionId" })
  functionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveFunctionTypeEnum;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchivePathParams;

  @SpeakeasyMetadata()
  security: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveSecurity;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeFunctionIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
