import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class DeleteAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;
}


export class DeleteAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAppsAppIdVersionsVersionPathParams;

  @Metadata()
  queryParams: DeleteAppsAppIdVersionsVersionQueryParams;
}


export class DeleteAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
