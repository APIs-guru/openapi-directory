import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class GetAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId?: string;
}


export class GetAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAppsAppIdVersionsVersionPathParams;

  @Metadata()
  queryParams: GetAppsAppIdVersionsVersionQueryParams;
}


export class GetAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
