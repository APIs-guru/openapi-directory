import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReadOptionsReadConsistencyEnum {
    ReadConsistencyUnspecified = "READ_CONSISTENCY_UNSPECIFIED",
    Strong = "STRONG",
    Eventual = "EVENTUAL"
}


// ReadOptions
/** 
 * The options shared by read requests.
**/
export class ReadOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readConsistency" })
  readConsistency?: ReadOptionsReadConsistencyEnum;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
