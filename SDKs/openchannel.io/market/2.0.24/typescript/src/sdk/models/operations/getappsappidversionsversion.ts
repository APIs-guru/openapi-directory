import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: number;
}


export class GetAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId?: string;
}


export class GetAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAppsAppIdVersionsVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAppsAppIdVersionsVersionQueryParams;
}


export class GetAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
