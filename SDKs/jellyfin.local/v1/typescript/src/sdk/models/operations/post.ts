import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class PostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageRefreshMode" })
  imageRefreshMode?: shared.MetadataRefreshModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metadataRefreshMode" })
  metadataRefreshMode?: shared.MetadataRefreshModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceAllImages" })
  replaceAllImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=replaceAllMetadata" })
  replaceAllMetadata?: boolean;
}


export class PostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPathParams;

  @SpeakeasyMetadata()
  queryParams: PostQueryParams;

  @SpeakeasyMetadata()
  security: PostSecurity;
}


export class PostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
