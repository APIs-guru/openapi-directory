import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HmacKeyMetadata
/** 
 * JSON template to produce a JSON-style HMAC Key metadata resource.
**/
export class HmacKeyMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessId" })
  accessId?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
