import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAppsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access" })
  access?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allow" })
  allow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developerId" })
  developerId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=restrict" })
  restrict?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class PostAppsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAppsQueryParams;
}


export class PostAppsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
