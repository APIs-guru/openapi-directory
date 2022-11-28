import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeFunctionTypeEnum;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypePathParams;

  @SpeakeasyMetadata()
  security: DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeSecurity;
}


export class DeleteAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeArchiveByFunctionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
