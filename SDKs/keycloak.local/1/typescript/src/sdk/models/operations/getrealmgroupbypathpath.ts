import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmGroupByPathPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmGroupByPathPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmGroupByPathPathPathParams;
}


export class GetRealmGroupByPathPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  groupRepresentation?: shared.GroupRepresentation;

  @Metadata()
  statusCode: number;
}
