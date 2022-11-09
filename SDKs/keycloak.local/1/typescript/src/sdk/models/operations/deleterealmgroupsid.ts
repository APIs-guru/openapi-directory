import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmGroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmGroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmGroupsIdPathParams;
}


export class DeleteRealmGroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
