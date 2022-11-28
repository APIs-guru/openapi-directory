import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWorkspaceIdMembersFindPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class GetWorkspaceIdMembersFindQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=github" })
  github?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source_host" })
  sourceHost?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetWorkspaceIdMembersFindSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class GetWorkspaceIdMembersFindRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWorkspaceIdMembersFindPathParams;

  @SpeakeasyMetadata()
  queryParams: GetWorkspaceIdMembersFindQueryParams;

  @SpeakeasyMetadata()
  security: GetWorkspaceIdMembersFindSecurity;
}


export class GetWorkspaceIdMembersFindResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
