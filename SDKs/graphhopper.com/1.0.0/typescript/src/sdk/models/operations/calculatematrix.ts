import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CalculateMatrixRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class CalculateMatrixResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  jobId?: shared.JobId;

  @Metadata()
  statusCode: number;
}
