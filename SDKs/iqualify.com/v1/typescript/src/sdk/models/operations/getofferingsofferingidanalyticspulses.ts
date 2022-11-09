import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdAnalyticsPulsesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdAnalyticsPulsesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdAnalyticsPulsesPathParams;
}


export class GetOfferingsOfferingIdAnalyticsPulsesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  getOfferingsOfferingIdAnalyticsPulses200ApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
