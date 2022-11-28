import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class PostAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow" })
  allow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=approvalRequired" })
  approvalRequired?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=restrict" })
  restrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class PostAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAppsAppIdVersionsVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: PostAppsAppIdVersionsVersionQueryParams;
}


export class PostAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
