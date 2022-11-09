import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RrSetRoutingPolicy } from "./rrsetroutingpolicy";


// ResourceRecordSet
/** 
 * A unit of data that is returned by the DNS servers.
**/
export class ResourceRecordSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=routingPolicy" })
  routingPolicy?: RrSetRoutingPolicy;

  @Metadata({ data: "json, name=rrdatas" })
  rrdatas?: string[];

  @Metadata({ data: "json, name=signatureRrdatas" })
  signatureRrdatas?: string[];

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
