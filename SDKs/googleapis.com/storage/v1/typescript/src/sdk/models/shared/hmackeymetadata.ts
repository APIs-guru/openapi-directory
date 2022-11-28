import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HmacKeyMetadata
/** 
 * JSON template to produce a JSON-style HMAC Key metadata resource.
**/
export class HmacKeyMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessId" })
  accessId?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=timeCreated" })
  timeCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
