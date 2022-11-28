import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Partner } from "./partner";



export class ListPartnersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=partners", elemType: Partner })
  partners?: Partner[];
}
