import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOfferingsOfferingIdGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOfferingsOfferingIdGroupsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssessmentGroupRequired;
}


export class PostOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
  @Metadata()
  assessmentGroupResponse?: shared.AssessmentGroupResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
