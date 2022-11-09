import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pulseId" })
  pulseId: string;
}


export class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.PulseResponse })
  pulseResponses?: shared.PulseResponse[];

  @Metadata()
  statusCode: number;
}
