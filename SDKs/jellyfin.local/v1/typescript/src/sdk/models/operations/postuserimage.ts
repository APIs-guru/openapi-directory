import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUserImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" })
  imageType: shared.ImageTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PostUserImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=index" })
  index?: number;
}


export class PostUserImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostUserImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUserImagePathParams;

  @SpeakeasyMetadata()
  queryParams: PostUserImageQueryParams;

  @SpeakeasyMetadata()
  security: PostUserImageSecurity;
}


export class PostUserImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
