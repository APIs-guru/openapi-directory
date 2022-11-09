import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmGroupsIdRoleMappingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsIdRoleMappingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupsIdRoleMappingsPathParams;
}


export class GetRealmGroupsIdRoleMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  mappingsRepresentation?: shared.MappingsRepresentation;

  @Metadata()
  statusCode: number;
}
