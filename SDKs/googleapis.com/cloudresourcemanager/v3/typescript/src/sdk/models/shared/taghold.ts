import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagHold
/** 
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
export class TagHold extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=helpLink" })
  helpLink?: string;

  @Metadata({ data: "json, name=holder" })
  holder?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=origin" })
  origin?: string;
}
