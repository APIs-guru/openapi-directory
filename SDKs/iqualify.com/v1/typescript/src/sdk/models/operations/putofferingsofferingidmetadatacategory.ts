import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutOfferingsOfferingIdMetadataCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PutOfferingsOfferingIdMetadataCategoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;
}


export class PutOfferingsOfferingIdMetadataCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutOfferingsOfferingIdMetadataCategoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutOfferingsOfferingIdMetadataCategoryRequestBody;
}


export class PutOfferingsOfferingIdMetadataCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  offeringMetadataResponse?: shared.OfferingMetadataResponse;

  @Metadata()
  statusCode: number;
}
