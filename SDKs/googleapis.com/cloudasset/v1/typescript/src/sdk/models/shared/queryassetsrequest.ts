import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryAssetsOutputConfig } from "./queryassetsoutputconfig";
import { TimeWindow } from "./timewindow";



// QueryAssetsRequest
/** 
 * QueryAssets request.
**/
export class QueryAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobReference" })
  jobReference?: string;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: QueryAssetsOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=readTimeWindow" })
  readTimeWindow?: TimeWindow;

  @SpeakeasyMetadata({ data: "json, name=statement" })
  statement?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
