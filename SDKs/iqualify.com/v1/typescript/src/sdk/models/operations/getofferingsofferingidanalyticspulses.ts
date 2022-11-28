import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdAnalyticsPulsesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsPulsesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdAnalyticsPulsesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsPulsesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  getOfferingsOfferingIdAnalyticsPulses200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
