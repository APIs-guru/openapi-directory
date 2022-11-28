import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { SourceInput } from "./source";


export enum PersonMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED",
    Person = "PERSON",
    Page = "PAGE"
}


// PersonMetadata
/** 
 * The metadata about a person.
**/
export class PersonMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=linkedPeopleResourceNames" })
  linkedPeopleResourceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: PersonMetadataObjectTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=previousResourceNames" })
  previousResourceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];
}


// PersonMetadataInput
/** 
 * The metadata about a person.
**/
export class PersonMetadataInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sources", elemType: SourceInput })
  sources?: SourceInput[];
}
