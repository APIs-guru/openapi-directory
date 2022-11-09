import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOfferingsOfferingIdMetadataTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataTagsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class PutOfferingsOfferingIdMetadataTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOfferingsOfferingIdMetadataTagsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataTagsRequestBody;
}


export class PutOfferingsOfferingIdMetadataTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @Metadata()
  statusCode: number;
}
