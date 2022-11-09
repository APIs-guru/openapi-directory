import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteUserImageByIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUserImageByIndexSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DeleteUserImageByIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserImageByIndexPathParams;

  @Metadata()
  security: DeleteUserImageByIndexSecurity;
}


export class DeleteUserImageByIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
