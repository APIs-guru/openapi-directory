import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Api } from "./api";
import { Peer } from "./peer";
import { Peer } from "./peer";
import { Request } from "./request";
import { Resource } from "./resource";
import { Response } from "./response";
import { Peer } from "./peer";


// AttributeContext
/** 
 * This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
**/
export class AttributeContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=api" })
  api?: Api;

  @Metadata({ data: "json, name=destination" })
  destination?: Peer;

  @Metadata({ data: "json, name=extensions" })
  extensions?: Map<string, any>[];

  @Metadata({ data: "json, name=origin" })
  origin?: Peer;

  @Metadata({ data: "json, name=request" })
  request?: Request;

  @Metadata({ data: "json, name=resource" })
  resource?: Resource;

  @Metadata({ data: "json, name=response" })
  response?: Response;

  @Metadata({ data: "json, name=source" })
  source?: Peer;
}
