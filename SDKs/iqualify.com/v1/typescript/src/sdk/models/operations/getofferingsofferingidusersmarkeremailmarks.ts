import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=markerEmail" })
  markerEmail: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdUsersMarkerEmailMarksPathParams;
}


export class GetOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingUser })
  offeringUsers?: shared.OfferingUser[];

  @SpeakeasyMetadata()
  statusCode: number;
}
