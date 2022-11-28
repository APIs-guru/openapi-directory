import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";



// UserDataMapping
/** 
 * Maps a resource to the associated user and Attributes.
**/
export class UserDataMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveTime" })
  archiveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataId" })
  dataId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceAttributes", elemType: Attribute })
  resourceAttributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// UserDataMappingInput
/** 
 * Maps a resource to the associated user and Attributes.
**/
export class UserDataMappingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataId" })
  dataId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceAttributes", elemType: Attribute })
  resourceAttributes?: Attribute[];

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
