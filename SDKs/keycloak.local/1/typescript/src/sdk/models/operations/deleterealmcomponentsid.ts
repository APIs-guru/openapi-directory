import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmComponentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmComponentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmComponentsIdPathParams;
}


export class DeleteRealmComponentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
