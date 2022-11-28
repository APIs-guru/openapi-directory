import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketAccessControlProjectTeam
/** 
 * The project team associated with the entity, if any.
**/
export class BucketAccessControlProjectTeam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=team" })
  team?: string;
}


// BucketAccessControl
/** 
 * An access-control entry.
**/
export class BucketAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: string;

  @SpeakeasyMetadata({ data: "json, name=entityId" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=projectTeam" })
  projectTeam?: BucketAccessControlProjectTeam;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
