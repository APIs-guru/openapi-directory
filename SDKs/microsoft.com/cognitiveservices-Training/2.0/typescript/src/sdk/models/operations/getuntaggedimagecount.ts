import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUntaggedImageCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetUntaggedImageCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetUntaggedImageCountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetUntaggedImageCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUntaggedImageCountPathParams;

  @Metadata()
  queryParams: GetUntaggedImageCountQueryParams;

  @Metadata()
  headers: GetUntaggedImageCountHeaders;
}


export class GetUntaggedImageCountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getUntaggedImageCount200ApplicationJsonInt32Integer?: number;

  @Metadata()
  getUntaggedImageCount200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
