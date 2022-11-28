import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SafeHtmlProto
/** 
 * IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.
**/
export class SafeHtmlProto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateDoNotAccessOrElseSafeHtmlWrappedValue" })
  privateDoNotAccessOrElseSafeHtmlWrappedValue?: string;
}
