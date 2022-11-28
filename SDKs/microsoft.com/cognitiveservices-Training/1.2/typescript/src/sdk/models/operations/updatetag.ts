import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: string;
}


export class UpdateTagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class UpdateTagRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tag?: shared.TagInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  tag1?: shared.TagInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  tag2?: shared.TagInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class UpdateTagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTagPathParams;

  @SpeakeasyMetadata()
  headers: UpdateTagHeaders;

  @SpeakeasyMetadata()
  request: UpdateTagRequestsInput;
}


export class UpdateTagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tag?: shared.Tag;
}
