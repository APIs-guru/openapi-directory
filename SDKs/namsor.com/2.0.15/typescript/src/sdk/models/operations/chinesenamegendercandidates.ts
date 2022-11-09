import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChineseNameGenderCandidatesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=knownGender" })
  knownGender: string;
}


export class ChineseNameGenderCandidatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameGenderCandidatesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ChineseNameGenderCandidatesPathParams;

  @Metadata()
  security: ChineseNameGenderCandidatesSecurity;
}


export class ChineseNameGenderCandidatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @Metadata()
  statusCode: number;
}
