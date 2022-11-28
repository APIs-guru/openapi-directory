import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CultureDto
/** 
 * Class CultureDto.
**/
export class CultureDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ThreeLetterISOLanguageName" })
  threeLetterIsoLanguageName?: string;

  @SpeakeasyMetadata({ data: "json, name=ThreeLetterISOLanguageNames" })
  threeLetterIsoLanguageNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=TwoLetterISOLanguageName" })
  twoLetterIsoLanguageName?: string;
}
