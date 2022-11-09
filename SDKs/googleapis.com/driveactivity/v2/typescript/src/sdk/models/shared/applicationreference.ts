import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApplicationReferenceTypeEnum {
    UnspecifiedReferenceType = "UNSPECIFIED_REFERENCE_TYPE"
,    Link = "LINK"
,    Discuss = "DISCUSS"
}


// ApplicationReference
/** 
 * Activity in applications other than Drive.
**/
export class ApplicationReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: ApplicationReferenceTypeEnum;
}
