import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pulseId" })
  pulseId: string;
}


export class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.PulseResponse })
  pulseResponses?: shared.PulseResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
