import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostOfferingsOfferingIdUsersUserEmailBadgesAwardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOfferingsOfferingIdUsersUserEmailBadgesAwardPathParams;
}


export class PostOfferingsOfferingIdUsersUserEmailBadgesAwardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awardedResponse?: shared.AwardedResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
