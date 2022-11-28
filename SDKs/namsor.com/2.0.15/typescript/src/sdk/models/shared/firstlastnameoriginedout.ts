import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FirstLastNameOriginedOut
/** 
 * Represents the output of inferring the LIKELY country of Origin from a personal name.
**/
export class FirstLastNameOriginedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countriesOriginTop" })
  countriesOriginTop?: string[];

  @SpeakeasyMetadata({ data: "json, name=countryOrigin" })
  countryOrigin?: string;

  @SpeakeasyMetadata({ data: "json, name=countryOriginAlt" })
  countryOriginAlt?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilityAltCalibrated" })
  probabilityAltCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=regionOrigin" })
  regionOrigin?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=subRegionOrigin" })
  subRegionOrigin?: string;

  @SpeakeasyMetadata({ data: "json, name=topRegionOrigin" })
  topRegionOrigin?: string;
}
