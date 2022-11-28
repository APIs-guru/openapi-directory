import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PersonalNameGeoOut
/** 
 * Classified geo names
**/
export class PersonalNameGeoOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countriesTop" })
  countriesTop?: string[];

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=countryAlt" })
  countryAlt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilityAltCalibrated" })
  probabilityAltCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=subRegion" })
  subRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=topRegion" })
  topRegion?: string;
}
