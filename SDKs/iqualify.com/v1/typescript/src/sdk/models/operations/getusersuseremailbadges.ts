import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserEmailBadgesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetUsersUserEmailBadgesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserEmailBadgesPathParams;
}


export class GetUsersUserEmailBadgesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserBadge })
  userBadges?: shared.UserBadge[];
}
