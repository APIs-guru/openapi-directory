import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilter } from "./apidimensionfilter";



export class ApiDimensionFilterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ApiDimensionFilter })
  filters?: ApiDimensionFilter[];

  @SpeakeasyMetadata({ data: "json, name=groupType" })
  groupType?: string;
}
