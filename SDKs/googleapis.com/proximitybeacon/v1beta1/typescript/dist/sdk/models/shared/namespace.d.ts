import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum NamespaceServingVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Unlisted = "UNLISTED",
    Public = "PUBLIC"
}
/**
 * An attachment namespace defines read and write access for all the attachments created under it. Each namespace is globally unique, and owned by one project which is the only project that can create attachments under it.
**/
export declare class Namespace extends SpeakeasyBase {
    namespaceName?: string;
    servingVisibility?: NamespaceServingVisibilityEnum;
}
