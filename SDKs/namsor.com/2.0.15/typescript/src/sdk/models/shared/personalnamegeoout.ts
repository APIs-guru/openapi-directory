import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PersonalNameGeoOut
/** 
 * Classified geo names
**/
export class PersonalNameGeoOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=countriesTop" })
  countriesTop?: string[];

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=countryAlt" })
  countryAlt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=probabilityAltCalibrated" })
  probabilityAltCalibrated?: number;

  @Metadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=subRegion" })
  subRegion?: string;

  @Metadata({ data: "json, name=topRegion" })
  topRegion?: string;
}
