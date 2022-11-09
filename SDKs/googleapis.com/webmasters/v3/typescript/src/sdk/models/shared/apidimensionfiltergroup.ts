import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDimensionFilter } from "./apidimensionfilter";


export class ApiDimensionFilterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=filters", elemType: shared.ApiDimensionFilter })
  filters?: ApiDimensionFilter[];

  @Metadata({ data: "json, name=groupType" })
  groupType?: string;
}
