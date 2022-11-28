import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActingUser } from "./actinguser";
import { Version } from "./version";


export enum ReleaseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Deploy = "DEPLOY",
    Rollback = "ROLLBACK",
    SiteDisable = "SITE_DISABLE"
}


// Release
/** 
 *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
**/
export class Release extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseTime" })
  releaseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseUser" })
  releaseUser?: ActingUser;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReleaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Version;
}
