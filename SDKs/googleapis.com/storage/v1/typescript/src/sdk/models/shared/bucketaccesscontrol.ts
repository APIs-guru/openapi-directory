import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketAccessControlProjectTeam
/** 
 * The project team associated with the entity, if any.
**/
export class BucketAccessControlProjectTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


// BucketAccessControl
/** 
 * An access-control entry.
**/
export class BucketAccessControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=entity" })
  entity?: string;

  @Metadata({ data: "json, name=entityId" })
  entityId?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=projectTeam" })
  projectTeam?: BucketAccessControlProjectTeam;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
