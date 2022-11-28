import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NamespaceServingVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Unlisted = "UNLISTED",
    Public = "PUBLIC"
}


// Namespace
/** 
 * An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.
**/
export class Namespace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata({ data: "json, name=servingVisibility" })
  servingVisibility?: NamespaceServingVisibilityEnum;
}
