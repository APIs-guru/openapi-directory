import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResultsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=result_file_id" })
  resultFileId: string;
}


export class ResultsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResultsReadPathParams;
}


export class ResultsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resultResponse?: shared.ResultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
