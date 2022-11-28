import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=definitionId" })
  definitionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionId" })
  revisionId: string;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdPathParams;

  @SpeakeasyMetadata()
  security: GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity;
}


export class GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionRevision?: shared.ActionRevision;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
