import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAttackDetectionBruteForceUsersUserIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAttackDetectionBruteForceUsersUserIdPathParams;
}


export class DeleteRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
