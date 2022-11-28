import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackfillJob } from "./backfilljob";
import { Error } from "./error";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";



// StreamObject
/** 
 * A specific stream object (e.g a specific DB table).
**/
export class StreamObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backfillJob" })
  backfillJob?: BackfillJob;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceObject" })
  sourceObject?: SourceObjectIdentifier;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
