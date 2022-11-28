import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EndPointInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsInNetwork" })
  isInNetwork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsLocal" })
  isLocal?: boolean;
}
