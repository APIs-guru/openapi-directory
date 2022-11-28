import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdAnalyticsUnitReactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsUnitReactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdAnalyticsUnitReactionsPathParams;
}


export class GetOfferingsOfferingIdAnalyticsUnitReactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UnitReactionsAnalyticsResponse })
  unitReactionsAnalyticsResponses?: shared.UnitReactionsAnalyticsResponse[];
}
