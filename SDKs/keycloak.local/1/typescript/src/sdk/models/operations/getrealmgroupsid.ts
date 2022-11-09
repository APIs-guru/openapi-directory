import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupsIdPathParams;
}


export class GetRealmGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupRepresentation?: shared.GroupRepresentation;

  @Metadata()
  statusCode: number;
}
