import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmUsersIdRoleMappingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdRoleMappingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersIdRoleMappingsPathParams;
}


export class GetRealmUsersIdRoleMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mappingsRepresentation?: shared.MappingsRepresentation;

  @Metadata()
  statusCode: number;
}
