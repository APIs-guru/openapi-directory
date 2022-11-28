import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PlatformType
/** 
 * Contains information about a platform type that can be targeted by ads.
**/
export class PlatformType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
