import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EndPointInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsInNetwork" })
  isInNetwork?: boolean;

  @Metadata({ data: "json, name=IsLocal" })
  isLocal?: boolean;
}
