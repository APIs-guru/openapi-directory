import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";



export class DeviceInfoQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items", elemType: DeviceInfo })
  items?: DeviceInfo[];

  @SpeakeasyMetadata({ data: "json, name=StartIndex" })
  startIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalRecordCount" })
  totalRecordCount?: number;
}
