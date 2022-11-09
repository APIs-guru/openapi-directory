import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResultsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=result_file_id" })
  resultFileId: string;
}


export class ResultsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResultsReadPathParams;
}


export class ResultsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resultResponse?: shared.ResultResponse;

  @Metadata()
  statusCode: number;
}
