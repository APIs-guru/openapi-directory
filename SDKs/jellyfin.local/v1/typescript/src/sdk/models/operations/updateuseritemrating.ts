import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateUserItemRatingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UpdateUserItemRatingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=likes" })
  likes?: boolean;
}


export class UpdateUserItemRatingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateUserItemRatingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateUserItemRatingPathParams;

  @Metadata()
  queryParams: UpdateUserItemRatingQueryParams;

  @Metadata()
  security: UpdateUserItemRatingSecurity;
}


export class UpdateUserItemRatingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userItemDataDto?: shared.UserItemDataDto;
}
