import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAppsAppIdPublishPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class PostAppsAppIdPublishQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoApprove" })
  autoApprove?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version: number;
}


export class PostAppsAppIdPublishRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdPublishPathParams;

  @SpeakeasyMetadata()
  queryParams: PostAppsAppIdPublishQueryParams;
}


export class PostAppsAppIdPublishResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
