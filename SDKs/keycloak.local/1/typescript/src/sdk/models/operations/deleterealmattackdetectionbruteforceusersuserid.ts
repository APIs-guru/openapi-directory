import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRealmAttackDetectionBruteForceUsersUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRealmAttackDetectionBruteForceUsersUserIdPathParams;
}


export class DeleteRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
