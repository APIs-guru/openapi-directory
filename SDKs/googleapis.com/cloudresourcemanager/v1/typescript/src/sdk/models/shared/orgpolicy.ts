import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanPolicy } from "./booleanpolicy";
import { ListPolicy } from "./listpolicy";



// OrgPolicy
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class OrgPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanPolicy" })
  booleanPolicy?: BooleanPolicy;

  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=listPolicy" })
  listPolicy?: ListPolicy;

  @SpeakeasyMetadata({ data: "json, name=restoreDefault" })
  restoreDefault?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
