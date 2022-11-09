import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class GetOfferingsOfferingIdGroupsGroupIdLearnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOfferingsOfferingIdGroupsGroupIdLearnersPathParams;
}


export class GetOfferingsOfferingIdGroupsGroupIdLearnersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserResponse })
  userResponses?: shared.UserResponse[];
}
