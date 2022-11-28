import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdActivitiesOpenresponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdActivitiesOpenresponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdActivitiesOpenresponsePathParams;
}


export class GetOfferingsOfferingIdActivitiesOpenresponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingActivitiesResponse })
  offeringActivitiesResponses?: shared.OfferingActivitiesResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
