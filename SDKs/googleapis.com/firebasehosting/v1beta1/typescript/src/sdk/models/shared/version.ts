import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServingConfig } from "./servingconfig";
import { ActingUser } from "./actinguser";


export enum VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED",
    Created = "CREATED",
    Finalized = "FINALIZED",
    Deleted = "DELETED",
    Abandoned = "ABANDONED",
    Expired = "EXPIRED",
    Cloning = "CLONING"
}


// Version
/** 
 * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ServingConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createUser" })
  createUser?: ActingUser;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteUser" })
  deleteUser?: ActingUser;

  @SpeakeasyMetadata({ data: "json, name=fileCount" })
  fileCount?: string;

  @SpeakeasyMetadata({ data: "json, name=finalizeTime" })
  finalizeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=finalizeUser" })
  finalizeUser?: ActingUser;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: VersionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=versionBytes" })
  versionBytes?: string;
}
