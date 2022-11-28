import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}

export enum GetOfferingsOfferingIdUsersFacilitatorsEnum {
    True = "true",
    False = "false"
}

export enum GetOfferingsOfferingIdUsersLearnersEnum {
    True = "true",
    False = "false"
}

export enum GetOfferingsOfferingIdUsersMarkersEnum {
    True = "true",
    False = "false"
}


export class GetOfferingsOfferingIdUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facilitators" })
  facilitators?: GetOfferingsOfferingIdUsersFacilitatorsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=learners" })
  learners?: GetOfferingsOfferingIdUsersLearnersEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=markers" })
  markers?: GetOfferingsOfferingIdUsersMarkersEnum;
}


export class GetOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOfferingsOfferingIdUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetOfferingsOfferingIdUsersQueryParams;
}


export class GetOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingUserResponse })
  offeringUserResponses?: shared.OfferingUserResponse[];

  @SpeakeasyMetadata()
  statusCode: number;
}
