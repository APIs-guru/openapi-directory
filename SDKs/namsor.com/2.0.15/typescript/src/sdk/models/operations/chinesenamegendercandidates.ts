import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChineseNameGenderCandidatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseGivenNameLatin" })
  chineseGivenNameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chineseSurnameLatin" })
  chineseSurnameLatin: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=knownGender" })
  knownGender: string;
}


export class ChineseNameGenderCandidatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ChineseNameGenderCandidatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ChineseNameGenderCandidatesPathParams;

  @SpeakeasyMetadata()
  security: ChineseNameGenderCandidatesSecurity;
}


export class ChineseNameGenderCandidatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
