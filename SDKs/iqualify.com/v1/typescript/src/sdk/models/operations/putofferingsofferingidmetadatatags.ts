import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOfferingsOfferingIdMetadataTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataTagsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class PutOfferingsOfferingIdMetadataTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOfferingsOfferingIdMetadataTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataTagsRequestBody;
}


export class PutOfferingsOfferingIdMetadataTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
