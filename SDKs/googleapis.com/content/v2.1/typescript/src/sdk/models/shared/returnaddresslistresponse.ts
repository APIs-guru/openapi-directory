import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnAddress } from "./returnaddress";



export class ReturnaddressListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: ReturnAddress })
  resources?: ReturnAddress[];
}
