import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class GetTagQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iterationId" })
  iterationId?: string;
}


export class GetTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagPathParams;

  @Metadata()
  queryParams: GetTagQueryParams;

  @Metadata()
  headers: GetTagHeaders;
}


export class GetTagResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
