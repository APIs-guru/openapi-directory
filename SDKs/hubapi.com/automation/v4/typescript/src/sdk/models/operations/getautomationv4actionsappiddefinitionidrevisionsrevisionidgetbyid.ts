import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revisionId" })
  revisionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams;

  @Metadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  actionRevision?: shared.ActionRevision;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
