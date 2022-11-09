import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceInfo } from "./deviceinfo";


export class DeviceInfoQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items", elemType: shared.DeviceInfo })
  items?: DeviceInfo[];

  @Metadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @Metadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
