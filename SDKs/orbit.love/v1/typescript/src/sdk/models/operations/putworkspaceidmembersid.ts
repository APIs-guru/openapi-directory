import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutWorkspaceIdMembersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" })
  workspaceId: string;
}


export class PutWorkspaceIdMembersIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  bearer: shared.SchemeBearer;
}


export class PutWorkspaceIdMembersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutWorkspaceIdMembersIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Member;

  @Metadata()
  security: PutWorkspaceIdMembersIdSecurity;
}


export class PutWorkspaceIdMembersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
