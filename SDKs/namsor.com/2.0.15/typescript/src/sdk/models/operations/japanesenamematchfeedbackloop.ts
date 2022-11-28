import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class JapaneseNameMatchFeedbackLoopPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseGivenNameLatin" })
  japaneseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseName" })
  japaneseName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=japaneseSurnameLatin" })
  japaneseSurnameLatin: string;
}


export class JapaneseNameMatchFeedbackLoopSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class JapaneseNameMatchFeedbackLoopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JapaneseNameMatchFeedbackLoopPathParams;

  @SpeakeasyMetadata()
  security: JapaneseNameMatchFeedbackLoopSecurity;
}


export class JapaneseNameMatchFeedbackLoopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  feedbackLoopOut?: shared.FeedbackLoopOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
