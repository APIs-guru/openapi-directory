import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagHold
/** 
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
export class TagHold extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=helpLink" })
  helpLink?: string;

  @SpeakeasyMetadata({ data: "json, name=holder" })
  holder?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;
}


// TagHoldInput
/** 
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
export class TagHoldInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=helpLink" })
  helpLink?: string;

  @SpeakeasyMetadata({ data: "json, name=holder" })
  holder?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;
}
