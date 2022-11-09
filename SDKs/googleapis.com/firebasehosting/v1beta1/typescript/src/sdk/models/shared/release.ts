import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActingUser } from "./actinguser";
import { Version } from "./version";

export enum ReleaseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Deploy = "DEPLOY"
,    Rollback = "ROLLBACK"
,    SiteDisable = "SITE_DISABLE"
}


// Release
/** 
 *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
**/
export class Release extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseTime" })
  releaseTime?: string;

  @Metadata({ data: "json, name=releaseUser" })
  releaseUser?: ActingUser;

  @Metadata({ data: "json, name=type" })
  type?: ReleaseTypeEnum;

  @Metadata({ data: "json, name=version" })
  version?: Version;
}
