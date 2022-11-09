import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Css } from "./css";


// ListCssesResponse
/** 
 * The response message for the `ListCsses` method
**/
export class ListCssesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=csses", elemType: shared.Css })
  csses?: Css[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
