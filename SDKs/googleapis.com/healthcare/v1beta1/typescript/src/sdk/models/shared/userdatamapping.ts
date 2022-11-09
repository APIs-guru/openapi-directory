import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attribute } from "./attribute";


// UserDataMapping
/** 
 * Maps a resource to the associated user and Attributes.
**/
export class UserDataMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveTime" })
  archiveTime?: string;

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=dataId" })
  dataId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceAttributes", elemType: shared.Attribute })
  resourceAttributes?: Attribute[];

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
