import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1ContentNotebook } from "./googleclouddataplexv1contentnotebook";
import { GoogleCloudDataplexV1ContentSqlScript } from "./googleclouddataplexv1contentsqlscript";


// GoogleCloudDataplexV1Content
/** 
 * Content represents a user-visible notebook or a sql script
**/
export class GoogleCloudDataplexV1Content extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataText" })
  dataText?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notebook" })
  notebook?: GoogleCloudDataplexV1ContentNotebook;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=sqlScript" })
  sqlScript?: GoogleCloudDataplexV1ContentSqlScript;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
