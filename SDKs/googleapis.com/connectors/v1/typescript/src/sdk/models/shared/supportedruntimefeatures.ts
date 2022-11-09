import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportedRuntimeFeatures
/** 
 * Supported runtime features of a connector version. This is passed to the management layer to add a new connector version by the connector developer. Details about how this proto is passed to the management layer is covered in this doc - go/runtime-manifest.
**/
export class SupportedRuntimeFeatures extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionApis" })
  actionApis?: boolean;

  @Metadata({ data: "json, name=entityApis" })
  entityApis?: boolean;

  @Metadata({ data: "json, name=sqlQuery" })
  sqlQuery?: boolean;
}
