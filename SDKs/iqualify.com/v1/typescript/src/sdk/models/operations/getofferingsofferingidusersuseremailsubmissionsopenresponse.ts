import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponsePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponsePathParams;
}


export class GetOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Assignments })
  assignments?: shared.Assignments[];

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
