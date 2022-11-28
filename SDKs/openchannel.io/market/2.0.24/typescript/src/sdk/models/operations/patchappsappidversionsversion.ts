import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class PatchAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
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


export class PatchAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchAppsAppIdVersionsVersionPathParams;

  @SpeakeasyMetadata()
  queryParams: PatchAppsAppIdVersionsVersionQueryParams;
}


export class PatchAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
