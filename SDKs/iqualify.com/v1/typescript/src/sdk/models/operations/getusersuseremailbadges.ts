import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserEmailBadgesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailBadgesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserEmailBadgesPathParams;
}


export class GetUsersUserEmailBadgesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserBadge })
  userBadges?: shared.UserBadge[];
}
