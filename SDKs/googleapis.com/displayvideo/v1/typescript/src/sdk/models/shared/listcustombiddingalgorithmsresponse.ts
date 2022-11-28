import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingAlgorithm } from "./custombiddingalgorithm";



export class ListCustomBiddingAlgorithmsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithms", elemType: CustomBiddingAlgorithm })
  customBiddingAlgorithms?: CustomBiddingAlgorithm[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
