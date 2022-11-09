import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BackfillJob } from "./backfilljob";
import { Error } from "./error";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";


// StreamObject
/** 
 * A specific stream object (e.g a specific DB table).
**/
export class StreamObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=backfillJob" })
  backfillJob?: BackfillJob;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourceObject" })
  sourceObject?: SourceObjectIdentifier;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
