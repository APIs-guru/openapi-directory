import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirstLastNameDiasporaedOut
/** 
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
export class FirstLastNameDiasporaedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @Metadata({ data: "json, name=ethnicitiesTop" })
  ethnicitiesTop?: string[];

  @Metadata({ data: "json, name=ethnicity" })
  ethnicity?: string;

  @Metadata({ data: "json, name=ethnicityAlt" })
  ethnicityAlt?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=lifted" })
  lifted?: boolean;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
