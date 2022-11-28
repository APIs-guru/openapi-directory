import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultDisplayMetadata } from "./resultdisplaymetadata";
import { NamedProperty } from "./namedproperty";
import { Person } from "./person";
import { Source } from "./source";



// Metadata
/** 
 * Metadata of a matched search result.
**/
export class Metadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayOptions" })
  displayOptions?: ResultDisplayMetadata;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: NamedProperty })
  fields?: NamedProperty[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: Person;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
