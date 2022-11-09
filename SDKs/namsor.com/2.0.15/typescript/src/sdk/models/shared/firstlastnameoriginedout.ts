import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FirstLastNameOriginedOut
/** 
 * Represents the output of inferring the LIKELY country of Origin from a personal name.
**/
export class FirstLastNameOriginedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=countriesOriginTop" })
  countriesOriginTop?: string[];

  @Metadata({ data: "json, name=countryOrigin" })
  countryOrigin?: string;

  @Metadata({ data: "json, name=countryOriginAlt" })
  countryOriginAlt?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=probabilityAltCalibrated" })
  probabilityAltCalibrated?: number;

  @Metadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @Metadata({ data: "json, name=regionOrigin" })
  regionOrigin?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=subRegionOrigin" })
  subRegionOrigin?: string;

  @Metadata({ data: "json, name=topRegionOrigin" })
  topRegionOrigin?: string;
}
