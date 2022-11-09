import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomationV4ActionsAppIdGetPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetAutomationV4ActionsAppIdGetPageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=archived" })
  archived?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetAutomationV4ActionsAppIdGetPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdGetPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomationV4ActionsAppIdGetPagePathParams;

  @Metadata()
  queryParams: GetAutomationV4ActionsAppIdGetPageQueryParams;

  @Metadata()
  security: GetAutomationV4ActionsAppIdGetPageSecurity;
}


export class GetAutomationV4ActionsAppIdGetPageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseExtensionActionDefinitionForwardPaging?: shared.CollectionResponseExtensionActionDefinitionForwardPaging;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
