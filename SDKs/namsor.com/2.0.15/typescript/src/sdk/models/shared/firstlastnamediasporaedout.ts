import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirstLastNameDiasporaedOut
/** 
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
export class FirstLastNameDiasporaedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryIso2" })
  countryIso2?: string;

  @SpeakeasyMetadata({ data: "json, name=ethnicitiesTop" })
  ethnicitiesTop?: string[];

  @SpeakeasyMetadata({ data: "json, name=ethnicity" })
  ethnicity?: string;

  @SpeakeasyMetadata({ data: "json, name=ethnicityAlt" })
  ethnicityAlt?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lifted" })
  lifted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
