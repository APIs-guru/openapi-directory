import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Actor } from "./actor";


// Attachment
/** 
 * Represents a file attached to a support case.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: Actor;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;
}
