import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdActivitiesOpenresponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdActivitiesOpenresponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdActivitiesOpenresponsePathParams;
}


export class GetOfferingsOfferingIdActivitiesOpenresponseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingActivitiesResponse })
  offeringActivitiesResponses?: shared.OfferingActivitiesResponse[];

  @Metadata()
  statusCode: number;
}
