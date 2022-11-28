import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppsAppIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class DeleteAppsAppIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;
}


export class DeleteAppsAppIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAppsAppIdPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteAppsAppIdQueryParams;
}


export class DeleteAppsAppIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
