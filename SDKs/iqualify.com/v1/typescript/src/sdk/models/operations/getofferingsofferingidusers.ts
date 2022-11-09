import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}

export enum GetOfferingsOfferingIdUsersFacilitatorsEnum {
    True = "true"
,    False = "false"
}

export enum GetOfferingsOfferingIdUsersLearnersEnum {
    True = "true"
,    False = "false"
}

export enum GetOfferingsOfferingIdUsersMarkersEnum {
    True = "true"
,    False = "false"
}


export class GetOfferingsOfferingIdUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=facilitators" })
  facilitators?: GetOfferingsOfferingIdUsersFacilitatorsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=learners" })
  learners?: GetOfferingsOfferingIdUsersLearnersEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=markers" })
  markers?: GetOfferingsOfferingIdUsersMarkersEnum;
}


export class GetOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdUsersPathParams;

  @Metadata()
  queryParams: GetOfferingsOfferingIdUsersQueryParams;
}


export class GetOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingUserResponse })
  offeringUserResponses?: shared.OfferingUserResponse[];

  @Metadata()
  statusCode: number;
}
