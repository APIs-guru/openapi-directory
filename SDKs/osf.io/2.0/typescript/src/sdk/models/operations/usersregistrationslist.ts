import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersRegistrationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersRegistrationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersRegistrationsListPathParams;
}


export class UsersRegistrationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
