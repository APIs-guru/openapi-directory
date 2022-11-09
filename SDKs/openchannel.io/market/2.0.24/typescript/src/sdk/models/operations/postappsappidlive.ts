import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAppsAppIdLivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class PostAppsAppIdLiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: string;
}


export class PostAppsAppIdLiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdLivePathParams;

  @Metadata()
  queryParams: PostAppsAppIdLiveQueryParams;
}


export class PostAppsAppIdLiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
