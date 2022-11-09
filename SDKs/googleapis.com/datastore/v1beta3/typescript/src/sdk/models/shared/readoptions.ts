import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReadOptionsReadConsistencyEnum {
    ReadConsistencyUnspecified = "READ_CONSISTENCY_UNSPECIFIED"
,    Strong = "STRONG"
,    Eventual = "EVENTUAL"
}


// ReadOptions
/** 
 * The options shared by read requests.
**/
export class ReadOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=readConsistency" })
  readConsistency?: ReadOptionsReadConsistencyEnum;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
