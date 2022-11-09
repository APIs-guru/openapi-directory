import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWorkspaceIdMembersFindPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspaceIdMembersFindQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=github" })
  github?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source_host" })
  sourceHost?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uid" })
  uid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetWorkspaceIdMembersFindSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersFindRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWorkspaceIdMembersFindPathParams;

  @Metadata()
  queryParams: GetWorkspaceIdMembersFindQueryParams;

  @Metadata()
  security: GetWorkspaceIdMembersFindSecurity;
}


export class GetWorkspaceIdMembersFindResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
