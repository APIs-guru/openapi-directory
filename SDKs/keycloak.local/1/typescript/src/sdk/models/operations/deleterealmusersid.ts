import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmUsersIdPathParams;
}


export class DeleteRealmUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
