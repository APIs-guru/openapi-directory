import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAppsAppIdVersionsVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class PostAppsAppIdVersionsVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow" })
  allow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=approvalRequired" })
  approvalRequired?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=attributes" })
  attributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=restrict" })
  restrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class PostAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAppsAppIdVersionsVersionPathParams;

  @Metadata()
  queryParams: PostAppsAppIdVersionsVersionQueryParams;
}


export class PostAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
