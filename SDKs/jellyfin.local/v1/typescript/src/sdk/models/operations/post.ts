import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class PostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=imageRefreshMode" })
  imageRefreshMode?: shared.MetadataRefreshModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metadataRefreshMode" })
  metadataRefreshMode?: shared.MetadataRefreshModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=replaceAllImages" })
  replaceAllImages?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=replaceAllMetadata" })
  replaceAllMetadata?: boolean;
}


export class PostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostPathParams;

  @Metadata()
  queryParams: PostQueryParams;

  @Metadata()
  security: PostSecurity;
}


export class PostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
