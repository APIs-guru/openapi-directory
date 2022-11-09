import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServingConfig } from "./servingconfig";
import { ActingUser } from "./actinguser";
import { ActingUser } from "./actinguser";
import { ActingUser } from "./actinguser";

export enum VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED"
,    Created = "CREATED"
,    Finalized = "FINALIZED"
,    Deleted = "DELETED"
,    Abandoned = "ABANDONED"
,    Expired = "EXPIRED"
,    Cloning = "CLONING"
}


// Version
/** 
 * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
**/
export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ServingConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=createUser" })
  createUser?: ActingUser;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=deleteUser" })
  deleteUser?: ActingUser;

  @Metadata({ data: "json, name=fileCount" })
  fileCount?: string;

  @Metadata({ data: "json, name=finalizeTime" })
  finalizeTime?: string;

  @Metadata({ data: "json, name=finalizeUser" })
  finalizeUser?: ActingUser;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: VersionStatusEnum;

  @Metadata({ data: "json, name=versionBytes" })
  versionBytes?: string;
}
