import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Css } from "./css";



// ListCssesResponse
/** 
 * The response message for the `ListCsses` method
**/
export class ListCssesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csses", elemType: Css })
  csses?: Css[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
