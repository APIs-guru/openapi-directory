import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUntaggedImageCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetUntaggedImageCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetUntaggedImageCountHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetUntaggedImageCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUntaggedImageCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUntaggedImageCountQueryParams;

  @SpeakeasyMetadata()
  headers: GetUntaggedImageCountHeaders;
}


export class GetUntaggedImageCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUntaggedImageCount200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  getUntaggedImageCount200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
