import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponsePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponsePathParams;
}


export class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Assignments })
  assignments?: shared.Assignments[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
