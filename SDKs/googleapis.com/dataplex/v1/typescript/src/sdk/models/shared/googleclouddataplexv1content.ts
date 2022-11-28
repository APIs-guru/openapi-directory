import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ContentNotebook } from "./googleclouddataplexv1contentnotebook";
import { GoogleCloudDataplexV1ContentSqlScript } from "./googleclouddataplexv1contentsqlscript";



// GoogleCloudDataplexV1ContentInput
/** 
 * Content represents a user-visible notebook or a sql script
**/
export class GoogleCloudDataplexV1ContentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataText" })
  dataText?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=notebook" })
  notebook?: GoogleCloudDataplexV1ContentNotebook;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlScript" })
  sqlScript?: GoogleCloudDataplexV1ContentSqlScript;
}


// GoogleCloudDataplexV1Content
/** 
 * Content represents a user-visible notebook or a sql script
**/
export class GoogleCloudDataplexV1Content extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataText" })
  dataText?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notebook" })
  notebook?: GoogleCloudDataplexV1ContentNotebook;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlScript" })
  sqlScript?: GoogleCloudDataplexV1ContentSqlScript;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
