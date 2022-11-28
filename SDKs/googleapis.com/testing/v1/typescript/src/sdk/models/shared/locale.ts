import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Locale
/** 
 * A location/region designation for language.
**/
export class Locale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
