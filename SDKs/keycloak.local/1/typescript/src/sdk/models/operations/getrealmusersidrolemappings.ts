import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmUsersIdRoleMappingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdRoleMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersIdRoleMappingsPathParams;
}


export class GetRealmUsersIdRoleMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  mappingsRepresentation?: shared.MappingsRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
