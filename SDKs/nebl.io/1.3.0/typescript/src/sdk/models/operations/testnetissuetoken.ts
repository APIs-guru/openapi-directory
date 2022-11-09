import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TestnetIssueTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IssueTokenRequest;
}


export class TestnetIssueTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  issueTokenResponse?: shared.IssueTokenResponse;
}
