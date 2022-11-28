import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApplicationReferenceTypeEnum {
    UnspecifiedReferenceType = "UNSPECIFIED_REFERENCE_TYPE",
    Link = "LINK",
    Discuss = "DISCUSS"
}
/**
 * Activity in applications other than Drive.
**/
export declare class ApplicationReference extends SpeakeasyBase {
    type?: ApplicationReferenceTypeEnum;
}
