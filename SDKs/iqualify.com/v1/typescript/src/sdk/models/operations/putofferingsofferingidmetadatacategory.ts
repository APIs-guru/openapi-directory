import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOfferingsOfferingIdMetadataCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataCategoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;
}


export class PutOfferingsOfferingIdMetadataCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOfferingsOfferingIdMetadataCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataCategoryRequestBody;
}


export class PutOfferingsOfferingIdMetadataCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
