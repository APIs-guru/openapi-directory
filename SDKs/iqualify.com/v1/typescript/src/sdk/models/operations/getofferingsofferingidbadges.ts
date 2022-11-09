import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdBadgesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdBadgesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdBadgesPathParams;
}


export class GetOfferingsOfferingIdBadgesResponse extends SpeakeasyBase {
  @Metadata()
  badge?: shared.Badge;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
