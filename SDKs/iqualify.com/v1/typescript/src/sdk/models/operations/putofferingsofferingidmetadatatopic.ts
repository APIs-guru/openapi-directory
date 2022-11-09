import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOfferingsOfferingIdMetadataTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataTopicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: string;
}


export class PutOfferingsOfferingIdMetadataTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOfferingsOfferingIdMetadataTopicPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataTopicRequestBody;
}


export class PutOfferingsOfferingIdMetadataTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @Metadata()
  statusCode: number;
}
