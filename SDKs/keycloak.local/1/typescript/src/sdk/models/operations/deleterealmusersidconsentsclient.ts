import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmUsersIdConsentsClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=client" })
  client: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdConsentsClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmUsersIdConsentsClientPathParams;
}


export class DeleteRealmUsersIdConsentsClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
