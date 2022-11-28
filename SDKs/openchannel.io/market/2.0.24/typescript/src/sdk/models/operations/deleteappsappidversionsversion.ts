import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class DeleteAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;
}


export class DeleteAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAppsAppIdVersionsVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteAppsAppIdVersionsVersionQueryParams;
}


export class DeleteAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
