import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudSecuritycenterV1BigQueryExport
/** 
 * Configures how to deliver Findings to BigQuery Instance.
**/
export class GoogleCloudSecuritycenterV1BigQueryExport extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataset" })
  dataset?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=mostRecentEditor" })
  mostRecentEditor?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=principal" })
  principal?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
