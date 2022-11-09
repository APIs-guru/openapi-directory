import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asset } from "./asset";
import { Asset } from "./asset";
import { StatementTemplate } from "./statementtemplate";


// BulkCheckRequest
/** 
 * Message used to check for the existence of multiple digital asset links within a single RPC.
**/
export class BulkCheckRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowGoogleInternalDataSources" })
  allowGoogleInternalDataSources?: boolean;

  @Metadata({ data: "json, name=defaultRelation" })
  defaultRelation?: string;

  @Metadata({ data: "json, name=defaultSource" })
  defaultSource?: Asset;

  @Metadata({ data: "json, name=defaultTarget" })
  defaultTarget?: Asset;

  @Metadata({ data: "json, name=skipCacheLookup" })
  skipCacheLookup?: boolean;

  @Metadata({ data: "json, name=statements", elemType: shared.StatementTemplate })
  statements?: StatementTemplate[];
}
