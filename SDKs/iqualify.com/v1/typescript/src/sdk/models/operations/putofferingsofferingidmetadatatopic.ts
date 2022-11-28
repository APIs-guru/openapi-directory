import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOfferingsOfferingIdMetadataTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataTopicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


export class PutOfferingsOfferingIdMetadataTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOfferingsOfferingIdMetadataTopicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataTopicRequestBody;
}


export class PutOfferingsOfferingIdMetadataTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
