import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SlsaCompleteness } from "./slsacompleteness";



// SlsaMetadata
/** 
 * Other properties of the build.
**/
export class SlsaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=completeness" })
  completeness?: SlsaCompleteness;

  @SpeakeasyMetadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
