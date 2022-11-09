import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppsAppIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class DeleteAppsAppIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;
}


export class DeleteAppsAppIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAppsAppIdPathParams;

  @Metadata()
  queryParams: DeleteAppsAppIdQueryParams;
}


export class DeleteAppsAppIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
