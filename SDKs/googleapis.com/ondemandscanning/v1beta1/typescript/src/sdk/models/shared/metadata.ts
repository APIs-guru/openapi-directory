import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Completeness } from "./completeness";


// Metadata
/** 
 * Other properties of the build.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @Metadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @Metadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @Metadata({ data: "json, name=completeness" })
  completeness?: Completeness;

  @Metadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
