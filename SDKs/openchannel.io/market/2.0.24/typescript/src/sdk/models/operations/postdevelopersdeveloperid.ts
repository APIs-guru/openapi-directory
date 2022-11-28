import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDevelopersDeveloperIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=developerId" })
  developerId: string;
}


export class PostDevelopersDeveloperIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customData" })
  customData?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class PostDevelopersDeveloperIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDevelopersDeveloperIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostDevelopersDeveloperIdQueryParams;
}


export class PostDevelopersDeveloperIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
