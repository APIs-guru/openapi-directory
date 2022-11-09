import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreviewsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: string;
}


export class PreviewsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PreviewsReadPathParams;
}


export class PreviewsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  previewResponse?: shared.PreviewResponse;

  @Metadata()
  statusCode: number;
}
