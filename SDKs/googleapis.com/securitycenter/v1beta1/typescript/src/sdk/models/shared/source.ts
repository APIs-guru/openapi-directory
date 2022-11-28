import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Source
/** 
 * Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
