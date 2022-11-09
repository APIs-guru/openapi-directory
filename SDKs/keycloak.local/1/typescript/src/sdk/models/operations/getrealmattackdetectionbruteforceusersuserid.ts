import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmAttackDetectionBruteForceUsersUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAttackDetectionBruteForceUsersUserIdPathParams;
}


export class GetRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmAttackDetectionBruteForceUsersUserId2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
