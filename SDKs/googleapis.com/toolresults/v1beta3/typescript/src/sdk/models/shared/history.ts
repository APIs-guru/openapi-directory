import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HistoryTestPlatformEnum {
    UnknownPlatform = "unknownPlatform",
    Android = "android",
    Ios = "ios"
}


// History
/** 
 * A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
**/
export class History extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=testPlatform" })
  testPlatform?: HistoryTestPlatformEnum;
}
