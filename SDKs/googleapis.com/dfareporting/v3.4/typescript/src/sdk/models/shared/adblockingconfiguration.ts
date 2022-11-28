import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdBlockingConfiguration
/** 
 * Campaign ad blocking settings.
**/
export class AdBlockingConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=creativeBundleId" })
  creativeBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overrideClickThroughUrl" })
  overrideClickThroughUrl?: boolean;
}
