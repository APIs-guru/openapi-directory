import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Completeness } from "./completeness";



// Metadata
/** 
 * Other properties of the build.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=completeness" })
  completeness?: Completeness;

  @SpeakeasyMetadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
