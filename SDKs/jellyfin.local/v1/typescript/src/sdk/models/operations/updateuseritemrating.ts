import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateUserItemRatingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserItemRatingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=likes" })
  likes?: boolean;
}


export class UpdateUserItemRatingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserItemRatingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateUserItemRatingPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateUserItemRatingQueryParams;

  @SpeakeasyMetadata()
  security: UpdateUserItemRatingSecurity;
}


export class UpdateUserItemRatingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userItemDataDto?: shared.UserItemDataDto;
}
