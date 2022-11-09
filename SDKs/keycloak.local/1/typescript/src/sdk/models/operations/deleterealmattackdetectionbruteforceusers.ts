import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmAttackDetectionBruteForceUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmAttackDetectionBruteForceUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmAttackDetectionBruteForceUsersPathParams;
}


export class DeleteRealmAttackDetectionBruteForceUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
