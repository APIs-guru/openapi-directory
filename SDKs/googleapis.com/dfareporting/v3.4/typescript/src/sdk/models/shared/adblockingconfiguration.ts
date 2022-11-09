import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdBlockingConfiguration
/** 
 * Campaign ad blocking settings.
**/
export class AdBlockingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: string;

  @Metadata({ data: "json, name=creativeBundleId" })
  creativeBundleId?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=overrideClickThroughUrl" })
  overrideClickThroughUrl?: boolean;
}
