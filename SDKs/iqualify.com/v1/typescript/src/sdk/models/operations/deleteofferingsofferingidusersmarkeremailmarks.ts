import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=markerEmail" })
  markerEmail: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingUser })
  offeringUsers?: shared.OfferingUser[];

  @SpeakeasyMetadata()
  statusCode: number;
}
