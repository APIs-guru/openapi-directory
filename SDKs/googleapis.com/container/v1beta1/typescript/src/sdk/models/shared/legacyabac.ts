import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LegacyAbac
/** 
 * Configuration for the legacy Attribute Based Access Control authorization mode.
**/
export class LegacyAbac extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
