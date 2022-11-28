import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LegacyAbac
/** 
 * Configuration for the legacy Attribute Based Access Control authorization mode.
**/
export class LegacyAbac extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
