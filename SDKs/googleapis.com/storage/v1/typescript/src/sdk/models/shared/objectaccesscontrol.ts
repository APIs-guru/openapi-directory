import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObjectAccessControlProjectTeam
/** 
 * The project team associated with the entity, if any.
**/
export class ObjectAccessControlProjectTeam extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectNumber" })
  projectNumber?: string;

  @Metadata({ data: "json, name=team" })
  team?: string;
}


// ObjectAccessControl
/** 
 * An access-control entry.
**/
export class ObjectAccessControl extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=projectTeam" })
  projectTeam?: ObjectAccessControlProjectTeam;

  @Metadata({ data: "json, name=role" })
  role?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
