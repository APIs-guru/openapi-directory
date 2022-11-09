import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Source } from "./source";

export enum PersonMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED"
,    Person = "PERSON"
,    Page = "PAGE"
}


// PersonMetadata
/** 
 * The metadata about a person.
**/
export class PersonMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=linkedPeopleResourceNames" })
  linkedPeopleResourceNames?: string[];

  @Metadata({ data: "json, name=objectType" })
  objectType?: PersonMetadataObjectTypeEnum;

  @Metadata({ data: "json, name=previousResourceNames" })
  previousResourceNames?: string[];

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];
}
