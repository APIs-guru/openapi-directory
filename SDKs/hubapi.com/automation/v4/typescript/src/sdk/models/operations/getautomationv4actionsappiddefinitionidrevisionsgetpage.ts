import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPagePathParams;

  @Metadata()
  queryParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageQueryParams;

  @Metadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseActionRevisionForwardPaging?: shared.CollectionResponseActionRevisionForwardPaging;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
