import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAppsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allow" })
  allow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=attributes" })
  attributes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=restrict" })
  restrict?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class PostAppsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostAppsQueryParams;
}


export class PostAppsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
