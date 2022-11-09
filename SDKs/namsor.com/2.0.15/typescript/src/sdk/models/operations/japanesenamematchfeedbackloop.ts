import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class JapaneseNameMatchFeedbackLoopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;
}


export class JapaneseNameMatchFeedbackLoopSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameMatchFeedbackLoopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JapaneseNameMatchFeedbackLoopPathParams;

  @Metadata()
  security: JapaneseNameMatchFeedbackLoopSecurity;
}


export class JapaneseNameMatchFeedbackLoopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  feedbackLoopOut?: shared.FeedbackLoopOut;

  @Metadata()
  statusCode: number;
}
