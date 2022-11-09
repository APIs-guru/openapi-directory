import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class PostOfferingsOfferingIdGroupsGroupIdLearnersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOfferingsOfferingIdGroupsGroupIdLearnersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostOfferingsOfferingIdGroupsGroupIdLearnersRequestBody;
}


export class PostOfferingsOfferingIdGroupsGroupIdLearnersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  userResponse?: shared.UserResponse;
}
