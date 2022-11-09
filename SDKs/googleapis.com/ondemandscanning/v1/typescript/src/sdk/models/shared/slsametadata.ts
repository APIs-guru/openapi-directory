import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SlsaCompleteness } from "./slsacompleteness";


// SlsaMetadata
/** 
 * Other properties of the build.
**/
export class SlsaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @Metadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @Metadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @Metadata({ data: "json, name=completeness" })
  completeness?: SlsaCompleteness;

  @Metadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
