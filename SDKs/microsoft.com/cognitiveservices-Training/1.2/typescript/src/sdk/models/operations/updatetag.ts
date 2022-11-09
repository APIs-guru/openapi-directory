import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateTagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class UpdateTagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UpdateTagRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  tag?: shared.Tag;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  tag1?: shared.Tag;

  @Metadata({ data: "request, media_type=text/json" })
  tag2?: shared.Tag;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UpdateTagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateTagPathParams;

  @Metadata()
  headers: UpdateTagHeaders;

  @Metadata()
  request: UpdateTagRequests;
}


export class UpdateTagResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tag?: shared.Tag;
}
