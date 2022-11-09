import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTaggedImageCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetTaggedImageCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagIds" })
  tagIds?: string[];
}


export class GetTaggedImageCountHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetTaggedImageCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaggedImageCountPathParams;

  @Metadata()
  queryParams: GetTaggedImageCountQueryParams;

  @Metadata()
  headers: GetTaggedImageCountHeaders;
}


export class GetTaggedImageCountResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getTaggedImageCount200ApplicationJsonInt32Integer?: number;

  @Metadata()
  getTaggedImageCount200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
