import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOfferingsOfferingIdGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOfferingsOfferingIdGroupsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssessmentGroupRequired;
}


export class PostOfferingsOfferingIdGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assessmentGroupResponse?: shared.AssessmentGroupResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
