import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions: Map<string, any>;
}
