import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostOfferingsOfferingIdUsersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.OfferingUser })
  request: shared.OfferingUser[];
}


export class PostOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.OfferingUserAddResponse })
  offeringUserAddResponses?: shared.OfferingUserAddResponse[];

  @SpeakeasyMetadata()
  postOfferingsOfferingIdUsers207ApplicationJsonOneoves?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
