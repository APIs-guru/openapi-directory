import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAppsAppIdPublishPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class PostAppsAppIdPublishQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=autoApprove" })
  autoApprove?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: number;
}


export class PostAppsAppIdPublishRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdPublishPathParams;

  @Metadata()
  queryParams: PostAppsAppIdPublishQueryParams;
}


export class PostAppsAppIdPublishResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
