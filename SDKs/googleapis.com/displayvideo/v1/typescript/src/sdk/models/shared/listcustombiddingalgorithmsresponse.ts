import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomBiddingAlgorithm } from "./custombiddingalgorithm";


export class ListCustomBiddingAlgorithmsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customBiddingAlgorithms", elemType: shared.CustomBiddingAlgorithm })
  customBiddingAlgorithms?: CustomBiddingAlgorithm[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
