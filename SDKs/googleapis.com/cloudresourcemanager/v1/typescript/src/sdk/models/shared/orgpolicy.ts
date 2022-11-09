import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanPolicy } from "./booleanpolicy";
import { ListPolicy } from "./listpolicy";


// OrgPolicy
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class OrgPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanPolicy" })
  booleanPolicy?: BooleanPolicy;

  @Metadata({ data: "json, name=constraint" })
  constraint?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=listPolicy" })
  listPolicy?: ListPolicy;

  @Metadata({ data: "json, name=restoreDefault" })
  restoreDefault?: Map<string, any>;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
