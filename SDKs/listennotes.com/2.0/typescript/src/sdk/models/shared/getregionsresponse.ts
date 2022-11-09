import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRegionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=regions" })
  regions: Map<string, any>;
}
