import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MappingSettings
/** 
 * Settings to change fields of a JWT token
**/
export class MappingSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=map" })
  map: Map<string, string>;

  @Metadata({ data: "json, name=remove" })
  remove: string[];

  @Metadata({ data: "json, name=values" })
  values: Map<string, string>;
}
