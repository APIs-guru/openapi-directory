import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum {
    PreActionExecution = "PRE_ACTION_EXECUTION",
    PreFetchOptions = "PRE_FETCH_OPTIONS",
    PostFetchOptions = "POST_FETCH_OPTIONS"
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=functionType" })
  functionType: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeFunctionTypeEnum;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypePathParams;

  @SpeakeasyMetadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdFunctionsFunctionTypeGetByFunctionTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionFunction?: shared.ActionFunction;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
