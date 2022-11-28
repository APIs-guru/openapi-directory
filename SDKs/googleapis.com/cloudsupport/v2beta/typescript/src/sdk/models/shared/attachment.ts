import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Actor } from "./actor";
import { ActorInput } from "./actor";



// Attachment
/** 
 * Represents a file attached to a support case.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: Actor;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}


// AttachmentInput
/** 
 * Represents a file attached to a support case.
**/
export class AttachmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: ActorInput;

  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;
}
