import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams;
}


export class PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse extends SpeakeasyBase {
  @Metadata()
  awardedResponse?: shared.AwardedResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
