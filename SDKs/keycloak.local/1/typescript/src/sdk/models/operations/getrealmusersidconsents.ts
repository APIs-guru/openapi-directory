import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmUsersIdConsentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersIdConsentsPathParams;
}


export class GetRealmUsersIdConsentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmUsersIdConsents2XxApplicationJsonObjects?: Map<string, any>[];

  @SpeakeasyMetadata()
  statusCode: number;
}
