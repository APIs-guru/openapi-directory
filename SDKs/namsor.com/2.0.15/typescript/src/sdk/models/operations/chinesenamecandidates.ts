import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChineseNameCandidatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;
}


export class ChineseNameCandidatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChineseNameCandidatesPathParams;

  @Metadata()
  security: ChineseNameCandidatesSecurity;
}


export class ChineseNameCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @Metadata()
  statusCode: number;
}
