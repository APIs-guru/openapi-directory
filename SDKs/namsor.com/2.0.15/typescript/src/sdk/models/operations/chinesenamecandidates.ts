import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChineseNameCandidatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;
}


export class ChineseNameCandidatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChineseNameCandidatesPathParams;

  @SpeakeasyMetadata()
  security: ChineseNameCandidatesSecurity;
}


export class ChineseNameCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
