import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams;

  @SpeakeasyMetadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  collectionResponseActionRevisionForwardPaging?: shared.CollectionResponseActionRevisionForwardPaging;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
