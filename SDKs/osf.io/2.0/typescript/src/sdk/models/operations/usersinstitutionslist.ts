import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersInstitutionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class UsersInstitutionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersInstitutionsListPathParams;
}


export class UsersInstitutionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
