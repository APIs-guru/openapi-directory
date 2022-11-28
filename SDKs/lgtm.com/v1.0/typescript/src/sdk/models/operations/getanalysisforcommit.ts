import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalysisForCommitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commit-id" })
  commitId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class GetAnalysisForCommitSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetAnalysisForCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalysisForCommitPathParams;

  @SpeakeasyMetadata()
  security: GetAnalysisForCommitSecurity;
}


export class GetAnalysisForCommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  analysis?: shared.Analysis;
}
