import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Zone } from "./zone";



export class ListZonesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=zone", elemType: Zone })
  zone?: Zone[];
}
