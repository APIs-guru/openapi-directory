import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAppsAppIdLivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class PostAppsAppIdLiveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: string;
}


export class PostAppsAppIdLiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdLivePathParams;

  @SpeakeasyMetadata()
  queryParams: PostAppsAppIdLiveQueryParams;
}


export class PostAppsAppIdLiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
