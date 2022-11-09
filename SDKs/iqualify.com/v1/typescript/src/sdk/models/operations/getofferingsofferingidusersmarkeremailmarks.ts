import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=markerEmail" })
  markerEmail: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams;
}


export class GetOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingUser })
  offeringUsers?: shared.OfferingUser[];

  @Metadata()
  statusCode: number;
}
