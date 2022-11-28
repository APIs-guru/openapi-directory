import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
**/
export declare class SupportedRuntimeFeatures extends SpeakeasyBase {
    actionApis?: boolean;
    entityApis?: boolean;
    sqlQuery?: boolean;
}
