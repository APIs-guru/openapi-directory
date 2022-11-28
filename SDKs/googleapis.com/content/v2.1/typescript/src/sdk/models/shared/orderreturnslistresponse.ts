import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturn } from "./merchantorderreturn";



export class OrderreturnsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: MerchantOrderReturn })
  resources?: MerchantOrderReturn[];
}
