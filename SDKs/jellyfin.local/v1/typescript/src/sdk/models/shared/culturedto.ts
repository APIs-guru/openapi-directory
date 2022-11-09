import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CultureDto
/** 
 * Class CultureDto.
**/
export class CultureDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ThreeLetterISOLanguageName" })
  threeLetterIsoLanguageName?: string;

  @Metadata({ data: "json, name=ThreeLetterISOLanguageNames" })
  threeLetterIsoLanguageNames?: string[];

  @Metadata({ data: "json, name=TwoLetterISOLanguageName" })
  twoLetterIsoLanguageName?: string;
}
