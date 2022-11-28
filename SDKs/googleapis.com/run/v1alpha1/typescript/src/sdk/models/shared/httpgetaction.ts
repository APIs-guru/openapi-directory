import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpHeader } from "./httpheader";



// HttpGetAction
/** 
 * Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests.
**/
export class HttpGetAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=httpHeaders", elemType: HttpHeader })
  httpHeaders?: HttpHeader[];

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=scheme" })
  scheme?: string;
}
