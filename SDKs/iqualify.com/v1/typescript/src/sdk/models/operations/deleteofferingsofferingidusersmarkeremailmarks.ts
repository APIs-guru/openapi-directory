import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=markerEmail" })
  markerEmail: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteOfferingsOfferingIdUsersMarkerEmailMarksPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string[];
}


export class DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingUser })
  offeringUsers?: shared.OfferingUser[];

  @Metadata()
  statusCode: number;
}
