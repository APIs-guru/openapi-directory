import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GtagConfig } from "./gtagconfig";



export class ListGtagConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gtagConfig", elemType: GtagConfig })
  gtagConfig?: GtagConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
