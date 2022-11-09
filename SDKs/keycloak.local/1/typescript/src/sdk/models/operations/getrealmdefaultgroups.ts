import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmDefaultGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmDefaultGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmDefaultGroupsPathParams;
}


export class GetRealmDefaultGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GroupRepresentation })
  groupRepresentations?: shared.GroupRepresentation[];

  @Metadata()
  statusCode: number;
}
