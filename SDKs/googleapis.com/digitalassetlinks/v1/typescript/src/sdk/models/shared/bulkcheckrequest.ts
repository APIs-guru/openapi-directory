import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
import { StatementTemplate } from "./statementtemplate";



// BulkCheckRequest
/** 
 * Message used to check for the existence of multiple digital asset links within a single RPC.
**/
export class BulkCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowGoogleInternalDataSources" })
  allowGoogleInternalDataSources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultRelation" })
  defaultRelation?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultSource" })
  defaultSource?: Asset;

  @SpeakeasyMetadata({ data: "json, name=defaultTarget" })
  defaultTarget?: Asset;

  @SpeakeasyMetadata({ data: "json, name=skipCacheLookup" })
  skipCacheLookup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statements", elemType: StatementTemplate })
  statements?: StatementTemplate[];
}
