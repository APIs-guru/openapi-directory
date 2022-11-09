import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResultDisplayMetadata } from "./resultdisplaymetadata";
import { NamedProperty } from "./namedproperty";
import { Person } from "./person";
import { Source } from "./source";


// Metadata
/** 
 * Metadata of a matched search result.
**/
export class Metadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayOptions" })
  displayOptions?: ResultDisplayMetadata;

  @Metadata({ data: "json, name=fields", elemType: shared.NamedProperty })
  fields?: NamedProperty[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: Person;

  @Metadata({ data: "json, name=source" })
  source?: Source;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
