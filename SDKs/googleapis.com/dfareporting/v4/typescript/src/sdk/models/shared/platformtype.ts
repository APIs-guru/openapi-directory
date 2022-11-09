import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PlatformType
/** 
 * Contains information about a platform type that can be targeted by ads.
**/
export class PlatformType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
