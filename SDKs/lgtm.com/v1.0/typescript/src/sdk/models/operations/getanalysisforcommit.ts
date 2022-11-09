import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnalysisForCommitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit-id" })
  commitId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class GetAnalysisForCommitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class GetAnalysisForCommitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnalysisForCommitPathParams;

  @Metadata()
  security: GetAnalysisForCommitSecurity;
}


export class GetAnalysisForCommitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  analysis?: shared.Analysis;
}
