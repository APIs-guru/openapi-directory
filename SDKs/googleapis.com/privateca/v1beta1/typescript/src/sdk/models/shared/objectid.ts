import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObjectId
/** 
 * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
**/
export class ObjectId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectIdPath" })
  objectIdPath?: number[];
}
