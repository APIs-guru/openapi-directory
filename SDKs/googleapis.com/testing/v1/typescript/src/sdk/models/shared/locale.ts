import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Locale
/** 
 * A location/region designation for language.
**/
export class Locale extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
