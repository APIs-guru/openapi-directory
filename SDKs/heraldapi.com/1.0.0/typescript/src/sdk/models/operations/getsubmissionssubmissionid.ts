import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionsSubmissionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission_id" })
  submissionId: string;
}


export class GetSubmissionsSubmissionId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: shared.SubmissionV1;
}


export class GetSubmissionsSubmissionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionsSubmissionIdPathParams;
}


export class GetSubmissionsSubmissionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSubmissionsSubmissionId200ApplicationJsonObject?: GetSubmissionsSubmissionId200ApplicationJson;
}
