import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreviewsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class PreviewsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PreviewsReadPathParams;
}


export class PreviewsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  previewResponse?: shared.PreviewResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
