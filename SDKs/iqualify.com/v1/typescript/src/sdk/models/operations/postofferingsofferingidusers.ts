import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostOfferingsOfferingIdUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=offeringId" })
  offeringId: string;
}


export class PostOfferingsOfferingIdUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostOfferingsOfferingIdUsersPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.OfferingUser })
  request: shared.OfferingUser[];
}


export class PostOfferingsOfferingIdUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.OfferingUserAddResponse })
  offeringUserAddResponses?: shared.OfferingUserAddResponse[];

  @Metadata()
  postOfferingsOfferingIdUsers207ApplicationJsonOneoves?: any[];

  @Metadata()
  statusCode: number;
}
