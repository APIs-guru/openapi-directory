import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectId
/** 
 * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
**/
export class ObjectId extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectIdPath" })
  objectIdPath?: number[];
}
