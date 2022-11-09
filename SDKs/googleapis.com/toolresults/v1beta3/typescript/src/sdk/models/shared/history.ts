import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HistoryTestPlatformEnum {
    UnknownPlatform = "unknownPlatform"
,    Android = "android"
,    Ios = "ios"
}


// History
/** 
 * A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.
**/
export class History extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=testPlatform" })
  testPlatform?: HistoryTestPlatformEnum;
}
