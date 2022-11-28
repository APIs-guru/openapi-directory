import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmAttackDetectionBruteForceUsersUserIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAttackDetectionBruteForceUsersUserIdPathParams;
}


export class GetRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmAttackDetectionBruteForceUsersUserId2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
