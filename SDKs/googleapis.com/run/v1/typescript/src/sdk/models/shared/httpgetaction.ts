import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpHeader } from "./httpheader";


// HttpGetAction
/** 
 * HTTPGetAction describes an action based on HTTP Get requests.
**/
export class HttpGetAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=httpHeaders", elemType: shared.HttpHeader })
  httpHeaders?: HttpHeader[];

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=scheme" })
  scheme?: string;
}
