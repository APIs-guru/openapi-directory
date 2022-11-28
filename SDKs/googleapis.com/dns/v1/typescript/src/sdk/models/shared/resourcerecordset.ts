import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RrSetRoutingPolicy } from "./rrsetroutingpolicy";



// ResourceRecordSet
/** 
 * A unit of data that is returned by the DNS servers.
**/
export class ResourceRecordSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=routingPolicy" })
  routingPolicy?: RrSetRoutingPolicy;

  @SpeakeasyMetadata({ data: "json, name=rrdatas" })
  rrdatas?: string[];

  @SpeakeasyMetadata({ data: "json, name=signatureRrdatas" })
  signatureRrdatas?: string[];

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
