import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MerchantOrderReturn } from "./merchantorderreturn";


export class OrderreturnsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.MerchantOrderReturn })
  resources?: MerchantOrderReturn[];
}
