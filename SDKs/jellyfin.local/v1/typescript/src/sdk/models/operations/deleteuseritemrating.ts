import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUserItemRatingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUserItemRatingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeleteUserItemRatingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserItemRatingPathParams;

  @Metadata()
  security: DeleteUserItemRatingSecurity;
}


export class DeleteUserItemRatingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userItemDataDto?: shared.UserItemDataDto;
}
